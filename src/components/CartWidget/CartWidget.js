import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '..//CartWidget/CartWidget.css'
const CartWidget = ()=> {
    return(
        <div className="cartWidget bg-indigo-800">
            <FontAwesomeIcon className='cart-shopping ' icon={faCartShopping} />
            <h5>5 </h5>
        </div>
        
    )

}
export default CartWidget;