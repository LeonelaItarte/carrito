import "./CartItem.css";
import ItemCount from "../../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";


const CartItem = ({cart})=>{


    const [contadorPrecio, setContadorPrecio] = useState(cart.contador * cart.price)

    function cambiarPrecio(cantidad){
        setContadorPrecio(cart.price * cantidad)
        cart.contador = cantidad
        addItem(cart)
    }



    const {removeItem, addItem}= useContext(CartContext); 



    return(
     <div className="fondo">
        <div className="cartContainer">

            <div className="clouse">

              <button onClick={() => {removeItem(cart.id)}}>X</button>

            </div>



           <div className="cart">
                <div className='image-container'>

                    <img src={cart.img} alt="imagen del producto"/>

                </div>

                <div className="cart2">

                   <p>{cart.name}</p>

                </div>

                <div className="cart2">

                    <ItemCount initial={cart.contador} stock={cart.stock} mostrarBoton={false} cambiarPrecio={cambiarPrecio}/>

                </div>

                <div className="cart2">

                    <p>$ {contadorPrecio}</p>

                </div>

           </div>


          
        </div>
     </div>
    )
}

export default CartItem;