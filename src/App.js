//import logo from '../src/img/logo.PNG';
import './App.css';
import '../src/components/NavBar/NavBar.css';
import '../src/components/Cards/Cards.css'
import NavBar from './components/NavBar/NavBar';
import Card from './components/Cards/Cards';

import  ItemListContainer from './components/itemsListContainer/itemsListContainer'
import Counter from './components/Counter/Counter';



function App() {
  return (
  
    <div className="container-flex App">
        <NavBar/>
      
      <div className='container-fluid'>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
         <ItemListContainer greeting={"Productos"}/> 
         <Counter/>
       <Card
          title="Iphone 12"
          description="Descripcion de Iphone 12"
          leftColor="#A74CF2"
          rightColor="#617BFB"/>
      </div>
        
      
      
    </div>
  );
}

export default App;
