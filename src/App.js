import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting ="Hola" />
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
