import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar/>

        <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>

        </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
