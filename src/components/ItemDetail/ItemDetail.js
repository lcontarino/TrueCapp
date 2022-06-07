import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Counter/Counter'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)

        addItem({ id, name, price, quantity })
    }

    return (
        <div className="row">
            <div className="col-md-6">
        <div className="CardItem">
            
            <div className='img-fluid'>
                <img src={img} alt={name} className="ItemImg"/>
            </div>
            </div>
            
        </div>
        
    
                      
           

        <div className="col-md-6">
        <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <div>
                
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>

            </div>
            <footer className='counterWrapper'>
                <div>
                { quantity > 0  
                    ? <Link to='/cart' className='checkOut bg-lime'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </div>
                
            </footer> 
        </div>
        </div>
    )
}

export default ItemDetail