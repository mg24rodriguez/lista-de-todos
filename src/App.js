import logo from './logo.png';
import Todos from "./components/Todos";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> lista de que haceres </h1>
      </header>

      <Todos/> 
    
    </div>
  );
}

export default App;
