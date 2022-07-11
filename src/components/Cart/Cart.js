import './Cart.css'
import { useState, useEffect, useContext } from "react"
import LoginUsers from '../Login/Login'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch, getDoc, doc } from 'firebase/firestore'
import { db, collectionsName, auth } from '../../services/firebase'
import Swal from 'sweetalert2'
import Spinner from '../Spinner/Spinner'

const Cart = () => {
    //Variables de Estado.
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [actUser, setactUser] = useState(null)
    const dbUser = collection(db, 'users')
    const [user, setUser] = useState([])

    useEffect(() => {

        auth.onAuthStateChanged((firebaseUser) => {

            setactUser(firebaseUser)
        });
    }, []);

    // useEffect(() => {

    //     const getUsers = async () =>{
    //         const data = await getDocs(dbUser);
    //         console.log(  data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //         setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     };
    //     getUsers();
    // }, []);

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [adress, setAdress] = useState('')
    const [adressNumber, setAdressNumber] = useState('')
    const [phone, setPhone] = useState('')
    const createOrder = () => {

        setLoading(true)
        const orderMail = collection(db, 'triggerEmail')
        console.log(name)

        const objOrder = {

            sendAdress: {
                adress: adress,
                adressNumber: adressNumber,

            },

            buyer: {
                name: name,
                surname: surname,
                buyerEmail: actUser.email,
                phone: phone

            },

            items: cart,
            total: getTotal()
        }


        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'products')



        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity


                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock })
                }
            }).then(({ id }) => {
                const emailContent = {
                    to: [actUser.email],
                    message: {
                        subject: 'Tu compra en TrueCapp',
                        html: 'Gracias' + ' ' + name + ' ' + 'por comprar en TrueCapp' + '\n El identificador de tu compra es: ' + id + ' ' + 'El envio será despachado a: ' + ' ' + adress + ' ' + adressNumber,
                    }
                }
                addDoc(orderMail, emailContent)
                // addDoc(dbUser,objOrder)
                batch.commit()
                clearCart()

                Swal.fire('Transaccion Aceptada', `El id de la orden es: ${id} 
                            <br> Recibiras el detalle en tu correo: ${actUser.email}`, 'success')


            }).catch(error => {
                console.log(error)
                Swal.fire('error', 'Algunos productos no tienen stock', 'error')
            }).finally(() => {
                setLoading(false)
            })

    }


    if (loading) {

        return <div className='container-fluid bg-gray-500'>
            <div className='col-md-12'>
                <h1 className='text-light'>Generando orden... <Spinner /> </h1></div>
            <div></div>

        </div>
    }

    if (getQuantity() === 0) {
        return (
            <div className='row  mx-0 bg-gray-800 w-100 text-center'>
                <div className='col-md-12'>
                    <h1 className='text-light'>No hay items en el carrito</h1>
                </div>
            </div>

        )
    }

    if (actUser === null) {
        return (
            <div className='row  mx-0 bg-gray-800 w-100 text-center'>
                <div className='col-md-12'>
                    <h1 className='text-light'>Debe estar Logueado para finalizar la compra</h1>
                </div>
            </div>
        )
    }


    return (
        <div className='mb-5'>
            <div className='row  mx-0 bg-gray-800 w-100 text-center'>
                <h1 className="text-light">Mi carrito</h1>
            </div>
            {(actUser ?
                <div>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                    <h3 className="mx-5 float-end mb-5">Total: ${getTotal()}</h3>

                    <div className='row bg-blue-400 mt-5 py-2 w-100 justify-content-center'>
                        <div className="rounded-start col-md-6 bg-gray-500 p-2 ">
                            <h2> Detalle de envío</h2>
                            <label className="label ">Nombre
                            </label >
                            <input className='form-control w-10'
                                type="text"
                                required
                                placeholder="Ej: Luis"
                                onChange={(e) => { setName(e.target.value) }} />

                            <label className="label ">Apellido
                            </label >
                            <input className='form-control w-10'
                                type="text"
                                required
                                placeholder="Ej: Gomez"
                                onChange={(e) => { setSurname(e.target.value) }} />


                            <label>Calle
                            </label>
                            <input className='form-control w-10'
                                label=""
                                placeholder="Ej: Av corrientes"
                                onChange={(e) => { setAdress(e.target.value) }} />
                            <label>Numero
                            </label>
                            <input className='form-control w-10'
                                label=""
                                placeholder="Ej: Av corrientes"
                                onChange={(e) => { setAdressNumber(e.target.value) }} />
                        </div>
                    </div>
                </div>
                : <div>Ingrese un usuario para finalizar la compra</div>
            )}

            {(name === '' || adress === '' ?
                <div>
                    <button className="btn btn-secondary mx-2" onClick={() => clearCart()} >Limpiar carrito</button>
                    <button className="btn btn-secondary  disabled ">Generar Orden</button>
                </div>

                :
                <div>
                    <button className="btn btn-secondary mx-2" onClick={() => clearCart()} >Limpiar carrito</button>
                    <button className="btn btn-secondary" onClick={createOrder}>Generar Orden</button>
                </div>

            )}



        </div>


    )
}

export default Cart