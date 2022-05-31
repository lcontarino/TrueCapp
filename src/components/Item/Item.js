import { Link } from "react-router-dom";
import Counter from '../Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Item.css'



const Item = ({id, name,description, price,img, handlePage}) => {
    return (
        <div className="CardItem">
            <div className="cardBody rounded float-left">
                            <div className='cardInfo'>
                                <img src={img} className="img-fluid rounded float-left" width="300px" alt="productImage" ></img>

                                <div className="cardDescription">
                                    <div className='cardTitle'>
                                        <p> {name}</p>
                                    </div>
                                    <div className='descriptionText'>
                                    <p>{description}</p>
                                    <li></li>
                                   
                                    </div>
                                </div>
                            </div>

                            <div className='counterWrapper'>
                                <Counter />
                                <div className="btn btn-sm bg-indigo-800 cardExplore-btn ">
                                    <FontAwesomeIcon icon={faCartShopping} className="btn-widget-shopping" />
                                    <p>Add to Basket</p>
                                </div>
                                <Link to={`/detail/${id}`} className='detailLink'>Ver detalle</Link>
                            </div>
                           
                        </div>
           
            
        </div>
    )
}
export default Item;