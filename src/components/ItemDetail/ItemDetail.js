import './ItemDetail.css'
import Counter from '../Counter/Counter';

const ItemDetail = ({ name, description, img, price,category,code }) => {
    return (
        <div>
            <h1>Detail Page</h1>
            <div className="container-fluid bg-gray-700 mx-auto">
                <div className="row">
                    <div className="col-md-6 py-1">
                        <div className="bg-white">
                            <img src={img} className="img-fluid" alt={name} />

                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className='row float-lg-start'>
                            <div className="col-md-12 text-white ">

                                <h1>{name}</h1>
                            </div>
                        </div>
                        <div class="row float-lg-start">
                            <div className="col-md-12">
                                <span className="label-primary">{category}</span>
                                <span class="Titillium"> Code:{" " + code}</span>
                            </div>
                           
                        </div>
                        
                        <div className="container-fluid text-lg-start float-lg-start bg-orange-500 mt-2">
                        <div className="Titillium col-md-12">
                        <p>{description}</p>
                        <hr></hr>
                        </div>
                        <Counter/>
                        <h3>${price}</h3>
                        <hr></hr>
                        
                       
                        </div>
                        
                        
                    </div>
                    
                </div>


            </div></div>

    )
}

export default ItemDetail