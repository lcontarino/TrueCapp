import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/TrueCapp' element={<ItemListContainer greeting="Todos los Productos"/>}/>
            {/* <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/> */}
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/products' element={<h1>Products</h1>}/>
            <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;