import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import CartListContainer from './components/Cart/CartListContainer/CartListContainer';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
       <Navbar/>

        <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartListContainer/>}/>


        </Routes>
        
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
