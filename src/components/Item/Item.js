import { Link } from "react-router-dom";

import './Item.css'

const Item = ({ id, name, description, tag1, tag2, tag3, price, img, handlePage }) => {
    return (


        <div className="cardItem col-lg-12 ">
            <div className="cardBody rounded float-left">
                <div className='cardInfo'>
                    <img src={img} className="rounded cardInfoImg mx-2" alt={name} ></img>

                    <div className="cardDescription">
                        <div className='cardTitle'>
                            <p>{name}</p>
                        </div>

                        <div className='descriptionText'>
                            <p>{description}</p>
                            <li>{tag1}</li>
                            <br></br>
                            <li>{tag2}</li>
                            <br></br>
                            <li>{tag3}</li>
                        </div>
                    </div>
                </div>
                <div className="cardFooter">
                   
                    <Link to={`/detail/${id}`} className="btn combo-btn combo-action detailLink">MAS DETALLES</Link>
                    {/* <div className="btn btn-sm bg-indigo-800 cardExplore-btn ">
                        <FontAwesomeIcon icon={faCartShopping} className="widget-shopping-icon" />
                        <p>Add to Basket</p>
                    </div> */}

                </div>
            </div>


        </div>


    )
}
export default Item;