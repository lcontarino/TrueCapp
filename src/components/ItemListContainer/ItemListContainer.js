import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'
import {SlideShow} from '../SlideShow/SlideShow'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    if(loading) {
        return <div className="container"><h1 className="text-light">Loading...</h1></div>
    }

    return(
        <div className='mb-5 mt-5'>
            <div className="container">
            <SlideShow/>
            </div>
            <h1>{ greeting }</h1>
            { 
                products.length > 0 
                    ? <ItemList products={products} />
                    : <h2>No hay productos</h2>
            }
        </div>
    )
}

export default ItemListContainer