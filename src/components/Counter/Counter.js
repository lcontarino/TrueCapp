import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import './Counter.css'

const Counter = () => {
    //let number=0;
    const [number, setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
        console.log(number)
        if (number === 5) { setNumber(5) }
    };
    const decrement = () => {
        setNumber(number - 1)
        if (number === 0) { setNumber(0) }
        console.log(number)
    };
    return (
        <div className="counterBody">
            <h5>Add to Basket</h5>
            <p className="addCount">{number}</p>
            <div>
                <button type="button"  className="btn btn-info btn-circle" onClick={decrement}><FontAwesomeIcon  icon={faCircleMinus} /></button>
                <button type="button"  className="btn btn-primary btn-circle" onClick={increment}><FontAwesomeIcon  icon={faCirclePlus} /></button>
            </div>
        </div>
    )

}
export default Counter;