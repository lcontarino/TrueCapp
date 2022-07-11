import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart';
import { AddDoc } from './components/AddDoc/AddDoc';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { RegisterUsers } from './components/RegisterUsers/RegisterUsers';
import { LoginUsers } from './components/Login/Login';
import { SlideShow } from './components/SlideShow/SlideShow';

const App = () => {
  return (
    <div className="App">

      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Productos populares" />} />
            <Route path='/TrueCapp' element={<ItemListContainer greeting="Productos populares" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/register' element={<RegisterUsers/>} />
            <Route path='/login' element={<LoginUsers/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/addoc' element={<AddDoc />} />
            <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
      <Footer/>
    </div>
  );
}

export default App;