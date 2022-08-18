import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{

   const {quantity} = useContext(CartContext);
   
   
   
    const cantidad = quantity()

    if(cantidad !== 0){
    return(
        <Link to={'/cart'}>
       
            <div className= "div">

                <img className="imagen" src='images/carrito-de-compras.png' alt="cart" />
                {cantidad}
            </div>
        </Link>
    )
}}
export default CartWidget