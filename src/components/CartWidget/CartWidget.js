import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '..//CartWidget/CartWidget.css'
const CartWidget = ()=> {
    return(
        <div className='cartWidget'>
            <FontAwesomeIcon className='cart-shopping ' icon={faCartShopping} />
            <h5>5 </h5>
        </div>
        
    )

}
export default CartWidget;