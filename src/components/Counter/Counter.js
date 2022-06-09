import './Counter.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    console.log(initial)
    console.log(quantity)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return (
        <div className='counterBody'>
            <button className="counterElement align-items-center justify-content-center" onClick={decrement}><FontAwesomeIcon icon={faSquareMinus} /></button>
            <h4 className='counterElement align-items-center justify-content-center text-white'>{quantity}</h4>
            <button className="counterElement align-items-center justify-content-center" onClick={increment}><FontAwesomeIcon icon={faSquarePlus} /></button>

            <div>
                <button className="btn btn-sm bg-indigo-800 cardExplore-btn" onClick={() => onAdd(quantity)}>
                    <FontAwesomeIcon icon={faCartShopping} className="widget-shopping-icon" />
                    <p> Agregar al carrito </p></button>
            </div>
        </div>
    )

}
export default ItemCount