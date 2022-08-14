import { Link } from "react-router-dom";
import "./CartListContainer.css";
import {useContext} from 'react';
import { CartContext } from "../../../Context/CartContext";
import CartList from "../CartList/CartList";

const CartListContainer = ()=>{

    const {cart} = useContext(CartContext); 


  return(
    <div>
       <CartList cart={cart}/>
    </div>
  )
}

export default CartListContainer; 