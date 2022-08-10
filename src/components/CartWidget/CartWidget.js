import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () =>{

   const {quantity} = useContext(CartContext);

   const cantidad = quantity()

    return(
 
        <div className= "div">
            <img className="imagen" src='images/carrito-de-compras.png' alt="cart" />
            {cantidad}
        </div>
    )
}
export default CartWidget