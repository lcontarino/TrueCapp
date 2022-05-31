import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
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
        <div className="container rounded counterBody bg-indigo-800">
             
            <div className="buttonsWrapper">
            <button className="btn btn-sm"  onClick={decrement}><FontAwesomeIcon icon={faSquareMinus} /></button>
            <p className="addCount">{number}</p>
            <button className="btn btn-sm"  onClick={increment}><FontAwesomeIcon icon={faSquarePlus} /></button>
            
           
               
                
            </div>
        </div>
    )

}
export default Counter;