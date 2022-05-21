import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './itemsListContainer.css'
import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'
//import CardImage from '../../img/82-800x600.jpg'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    console.log('Antes de Montar')
    
    return(
        
        <div className='ItemsListContainer'>
            <h1>{greeting}</h1>
            <div className="cardBody">
            
            <div className="cardImg" >
            <img src={products.map(product => product.img)} alt="productImage" ></img>
            </div>
            <div className='cardInfo'>
                <div className='cardTitle'>
                {products.map(product => <p key={product.id}>{product.name}</p>)}
                </div>
            <div className="cardDescription">
            <h5>{products.map(product => <p key={product.id}>{product.description}</p>)}</h5>
            </div>
            </div>
                
            
            
            
            <div className="cardExplore-btn">  <FontAwesomeIcon icon={faCartShopping} />Add to Basket</div>
            </div>
            
            
            
            
        </div>
    )
}

export default ItemListContainer;