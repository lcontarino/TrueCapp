import logo from '../src/img/logo.PNG';
import './App.css';
import '../src/components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';

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
