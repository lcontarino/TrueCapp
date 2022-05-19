import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const CartWidget = ()=> {
    return(
        <div class='cartWidget'>
            <FontAwesomeIcon icon={faCartShopping} />
            <h5>5 </h5>
        </div>
        
    )

}
export default CartWidget;