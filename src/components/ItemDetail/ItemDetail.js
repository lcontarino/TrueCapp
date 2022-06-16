import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    //const { setNotification } = useNotification()

    const { addItem, getProduct } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        //setNotification('success', 'Se agrego correctamente al carrito')
        addItem({ id, name, price, quantity })
    }

    return (
        <div className="ItemDetailContainer">
            <div className='row'>
                <div className='col-md-6'>
                <div className='img-fluid'>
                <img src={img} alt={name} className="ItemImg"/>
            </div>
                </div>
                <div className='col-md-6'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>  
            <div className='counterWrapper  bg-indigo-900 p-2'>
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}               
            </div> 
            </div>        
            
        </div>
        </div>
    )
}

export default ItemDetail