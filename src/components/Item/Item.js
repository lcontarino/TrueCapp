import { Link } from "react-router-dom";
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Item = ({ id, category, price, name, description, tag1, tag2, tag3, img }) => {
    return (

         //Container for all products
       
            <div className='col-md-6 col-xl-3'>


                <div className='cardBody  col-md-4 bg-white'>
                    <div className='card'>
                        <div className='product align-items-center p-2 text-center'>
                            <img src={img} className=" img-fluid cardInfoImg   mx-2 my-2" alt={name}></img>
                            <h5>{category}</h5>
                            <div className='mt-3 info'>
                                <span className='text-1 d-block'>
                                    {name}
                                </span>
                            </div>
                            <div className='cost mt-3 text-dark'>
                                <span>
                                    $ {price}
                                </span>
                                <div className='star mt-3 align-items-center'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                         {/* Button  */}
                         <div className='p-3 card-btn text-center text-white mt-3 cursor'>
                             <span className='text-uppercase text-black'>
                             <Link to={`/detail/${id}`} className="btn combo-btn combo-action detailLink">MAS DETALLES</Link>
                             </span>
                         </div>
                        
                       
                    </div>
                </div>
            </div>



    )
}
export default Item;