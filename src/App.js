import logo from '../src/img/logo.PNG';
import './App.css';
import '../src/components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import '../src/components/CartWidget/CartWidget.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
  
    <div className="App">
        <NavBar/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
       
      
      </header>
    </div>
  );
}

export default App;
