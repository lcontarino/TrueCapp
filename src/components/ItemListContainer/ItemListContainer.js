import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import Counter from '../Counter/Counter';
import ItemList from '../ItemList/ItemList';
//import CardImage from '../../img/82-800x600.jpg'

const ItemListContainer = ({ greeting,handlePage}) => {
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
                            <div><ItemList products={products}handlePage={handlePage}/></div>
                        
                    )
                })
            }

        </div>
    )
}

export default ItemListContainer;