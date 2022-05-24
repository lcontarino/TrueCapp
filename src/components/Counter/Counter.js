import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
        <div className="container rounded counterBody">
             <p className="addCount">{number}</p>
            <div className="buttonsWrapper">
            <btn type="button"  onClick={increment}><FontAwesomeIcon icon={faCaretUp} /></btn>
            <btn type="button"  onClick={decrement}><FontAwesomeIcon icon={faCaretDown} /></btn>
               
                
            </div>
        </div>
    )

}
export default Counter;