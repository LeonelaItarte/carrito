import "./CartItem.css";
import ItemCount from "../../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";


const CartItem = ({cart})=>{


    const [contadorPrecio, setContadorPrecio] = useState(cart.contador * cart.price)

    function cambiarPrecio(cantidad){
        setContadorPrecio(cart.price * cantidad)
    }

    const {removeItem}= useContext(CartContext); 



    return(
        <div className="cartContainer">

           <div className="cart">
                <div className='image-container'>

                    <img src={cart.img} alt="imagen del producto"/>

                </div>

                <div className="cart2">

                   <p>{cart.name}</p>

                </div>

                <div>

                    <ItemCount initial={cart.contador} stock={cart.stock} mostrarBoton={false} cambiarPrecio={cambiarPrecio}/>

                </div>

                <div>

                    <p>$ {contadorPrecio}</p>

                </div>

           </div>


           <div>

            <button onClick={() => {removeItem(cart.id)}}>X</button>

            <button>Finalizar Compra</button>

           </div>
        </div>
    )
}

export default CartItem;