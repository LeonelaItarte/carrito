import "./CartList.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import ModalFinal from "../../ModalFinal/ModalFinal";

const CartList = ({cart})=>{

    const [open, setOpen] = useState(false)

    const [ordenID, setOrdenID] = useState(null)

    console.log('soy el ordenid ' + ordenID)


    if(cart.length === 0){
        return(
            <div>
                <h3>No hay nada agragado en el carrito</h3>
                <Link to="/">
                   <button>Volver a productos</button>
                </Link>
                 <ModalFinal  ordenID={ordenID}/> 
            </div>
        )
    }
    return(
        <div>
            {cart.map(p => 
                <CartItem key={p.id} cart={p}/>
                
                )}
                <div>
                    <button onClick={() => {setOpen(true)}}>Finalizar Compra</button>


                </div>
                <Modal open={open} onClose={() => {setOpen(false)}} setOrdenID={setOrdenID}/>
                <ModalFinal  ordenID={ordenID} onClose={setOrdenID}/> 
        </div>
    )
}

export default CartList;