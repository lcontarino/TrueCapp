import './Cart.css'
import { useState, useEffect, useContext } from "react"
import LoginUsers from '../Login/Login'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch, getDoc, doc } from 'firebase/firestore'
import { db, collectionsName, auth } from '../../services/firebase'
import Swal from 'sweetalert2'
import Spinner from '../Spinner/Spinner'
import { parse } from '@fortawesome/fontawesome-svg-core'

const Cart = () => {
    //Variables de Estado.
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [actUser, setactUser] = useState(null)
    const dbUser = collection(db, 'users')
    const [user, setUser] = useState([])

    // {user.map((user) => {
    //     return (
            
    //         console.log("UserID: " + user.uid)
            
    //     )
    // })}

    useEffect(() => {
        getDoc(doc(db, 'users',auth.currentUser.uid)).then(response => {
            console.log(response)
        })
        
        
    }, []);


    useEffect(() => {

        auth.onAuthStateChanged((firebaseUser) => {
            console.log("Estas Logueado con: ", firebaseUser);
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
    
    const createOrder = () => {
        
        console.log('crear orden')
      
        setLoading(true)
        const orderMail = collection(db, 'triggerEmail')
        
        const objOrder = {

            sendAdress: {
                buyerEmail: actUser.email
            },
            // sendAdress: {
            //     adress1: ''
            // },
            // buyer: {
            //    email: actUser.email,
            //    idNumber: ''
            // },

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
                        text: 'Gracias por comprar en TrueCapp',
                        html: 'Gracias por comprar en TrueCapp. El identificador de tu compra es: ' + id,
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

        return <div className='container-fluid'>
            <h1 className='text-light fw-bolder '>Generando orden...<Spinner /> </h1>

        </div>
    }

    if (getQuantity() === 0) {
        return (
            <div className='container bg-blue-900 justify-content-center '>
                <h1 className='text-light'>No hay items en el carrito</h1>
            </div>

        )
    }

    return (
        <div className='mb-5'>
            <h1>Mi carrito</h1>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${getTotal()}</h3>
            <btn className="btn btn-secondary mx-2" onClick={() => clearCart()} >Limpiar carrito</btn>
            <btn className="btn btn-secondary" onClick={createOrder}>Generar Orden</btn>


        </div>
    )
}

export default Cart