import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description,shortdesc, price, stock }) => {
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
            <div className='row pt-2  mb-1 pb-2 px-2 mx-0 bg-white w-100 text-center'>
                <div className='col-md-6'>
                <div className='img-fluid'>
                <img src={img} alt={name} className="ItemImg"/>
            </div>
                </div>
                <div className='col-md-6 border border-1 border-secondary rounded-3 pb-2'>
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
                    Descripción: {shortdesc}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>  
            <section className='desc-footer   p-2'>
                { quantity > 0  
                    ? <Link to='/cart' className='btn btn-primary'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}               
            </section> 

           
            </div>        
            <section className='descriptionWrapper mt-2 rounded border-1 border'>
                <h1>{name}</h1>
            <p className="Info">
                     {description}
                </p>
            </section>
        </div>
        </div>
    )
}

export default ItemDetail