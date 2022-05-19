import logo from '../src/img/logo.PNG';
import './App.css';
import '../src/components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
// import CartWidget from './components/CartWidget/CartWidget';
import Card from './components/Cards/Cards';
import '../src/components/Cards/Cards.css'
import '../src/components/CartWidget/CartWidget.css'; 
//import  ItemListContainer from './components/itemsListContainer/itemsListContainer'


function App() {
  return (
  
    <div className="App">
        <NavBar/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ItemListContainer/> */}
       <Card/>
      
      </header>
    </div>
  );
}

export default App;
