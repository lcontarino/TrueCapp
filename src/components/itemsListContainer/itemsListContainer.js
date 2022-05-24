import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './itemsListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import Counter from '../Counter/Counter';
//import CardImage from '../../img/82-800x600.jpg'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    console.log('Antes de Montar')

    return (

        <div className='container'>
            <h1>{greeting}</h1>
            {
                products.map((product) => {
                    return (
                        <div className="cardBody rounded float-left">
                            <img src={product.img} class="img-fluid rounded float-left" width="300px" alt="productImage" ></img>

                            <div className='cardInfo'>
                                <div className='cardTitle'>
                                    <p>{<p key={product.id} > {product.description}</p>}</p>

                                </div>
                                <div className="cardDescription">
                                    <h5>{<p key={product.id} > {product.description}</p>}</h5>
                                </div>
                            </div>
                            <div className="btn btn-sm btn-primary cardExplore-btn ">
                                <FontAwesomeIcon icon={faCartShopping} className="btn-widget-shopping" />
                                <p>Add to Basket</p>
                            </div>
                            <div className='counterWrapper'>
                            <Counter />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ItemListContainer;