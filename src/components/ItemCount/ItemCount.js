import './ItemCount.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='bg-indigo-900 w-100 p-2'>
            <div className='counterWrapper'>
            <button
                className=" btn counterElement align-items-center justify-content-center"
                onClick={decrement}>
                <FontAwesomeIcon icon={faCircleMinus} />
            </button>

            <h4 className='counterElement align-items-center justify-content-center text-white'>{quantity}</h4>

            <button
                className="btn counterElement align-items-center justify-content-center"
                onClick={increment}>
                <FontAwesomeIcon icon={faCirclePlus} />
            </button>
            </div>
            <div>
                <button className="btn btn-sm bg-indigo-800 cardExplore-btn" onClick={() => onAdd(quantity)}>
                    <FontAwesomeIcon icon={faCartShopping} className="widget-shopping-icon" />
                    <p> Add to cart </p></button>
            </div>
        </div>
    )

}
export default ItemCount