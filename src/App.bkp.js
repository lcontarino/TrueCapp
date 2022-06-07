import React, { useState, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import SideBarFilter from './components/SideBarFilter/SideBarFilter'

export const Context = createContext()



const App = () => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let accu = 2
        cart.forEach(prod => {
            accu += prod.getQuantity
        })
        return accu
    }
    return (
        <div className="App">
            <Context.Provider value={{ cart, addItem, getQuantity }}>
                <BrowserRouter>
                    <NavBar />

                    <Routes>
                        <Route path='/TrueCapp' element={<ItemListContainer greeting="Todos los Productos" />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos Filtrados" />} />
                        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                        <Route path='/products' element={<h1>Products</h1>} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>

        </div>
    );
}

export default App;