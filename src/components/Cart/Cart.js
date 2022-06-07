import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './Cart.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div className="row mt-2">
            <div className=" col-md-6 "> 
            <h1>Shopping Cart</h1>
            <FontAwesomeIcon className='cart-shopping ' icon={faShoppingCart} />
            </div>
            
        <div className="col-md-6 "> 
        
            
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className="cartProduct mx-3">
                             <div className="productQuantity">QTY: <span className="productQuantityText bg-indigo-800 text-light">{prod.quantity}</span></div>
                            <div className="productName" >{prod.name}</div>
                           
                            <div>Precio x Uni: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.quantity}</div>
                            <button className="btn btn-sm btn-danger mx-2" onClick={() => removeItem(prod.id)}>remove</button>
                        </div>
                    )})
                }
            </div>
        </div>
        </div>
    )
}

export default Cart