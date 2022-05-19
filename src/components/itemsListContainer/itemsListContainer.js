import './itemsListContainer.css'
import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'

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
            {products.map(product => <p key={product.id}>{product.name}</p>)}
        </div>
    )
}

export default ItemListContainer;