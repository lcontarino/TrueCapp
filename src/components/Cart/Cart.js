import './Cart.css'
import { useState, useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {  addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, collectionsName } from '../../services/firebase'
import {auth} from '../../services/firebase'
import Swal from 'sweetalert2'
import Spinner from '../Spinner/Spinner'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const createOrder = () => {
      
        console.log('crear orden')
        setLoading(true)
        
        const actuser = {user   :auth.currentUser.email,
                         userid : auth.currentUser.uid}
       
        const objOrder = {
            sendAdress:{
                adress1: 'Elcano'
            },
            buyer: {
                 actuser
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

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                //console.log('El id de la orden es:' `${id}`)
                Swal.fire('Transaccion Aceptada',`El id de la orden es: ${id}`,'success')
            }).catch(error => {
                console.log(error)
            Swal.fire('error','Algunos productos no tienen stock','error')
            }).finally(() => {
                setLoading(false)
            })
    }
    
    if(loading) {
        return <div className='container-fluid'> 
            <h1 className='text-light fw-bolder '>Generando orden...<Spinner/> </h1>
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
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <btn className="btn btn-secondary mx-2" onClick={() => clearCart()} >Limpiar carrito</btn>
            <btn className="btn btn-secondary" onClick={createOrder  } >Generar Orden</btn>
            
          
        </div>
    )
}

export default Cart