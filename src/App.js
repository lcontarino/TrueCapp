//import logo from '../src/img/logo.PNG';
import './App.css';
import '../src/components/NavBar/NavBar.css';

import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/itemsListContainer/itemsListContainer'
import Counter from './components/Counter/Counter';



function App() {
  return (
    

    <div className="App">
      
      <NavBar />
      <div className='container'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ItemListContainer greeting={"Productos"} />
        
        
      </div>  



    </div>
  );
}

export default App;
