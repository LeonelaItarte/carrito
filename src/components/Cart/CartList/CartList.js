import "./CartList.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartList = ({cart})=>{

    if(cart.length === 0){
        return(
            <div>
                <h3>No hay nada agragado en el carrito</h3>
                <Link to="/">
                   <button>Volver a productos</button>
                </Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(p => 
                <CartItem key={p.id} cart={p}/>
                
                )}
        </div>
    )
}

export default CartList;