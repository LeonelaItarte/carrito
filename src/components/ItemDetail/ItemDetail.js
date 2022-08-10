import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import {useState,useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({id, name, price, category, img, stock, description, shipping}) => {

    const {cart, addItem} = useContext(CartContext); 

    let [nuevoStock, setNuevoStock] = useState(stock);

    let [bandera ,setBandera] = useState(false);

    function onAdd(contador){

      setNuevoStock(e => e - contador)

      setBandera(true)
      
      addItem({id,name,price,contador})
    }

    return (
        <div className="item-detail">
            <div className="container-imagen-detalle">
                <div>
                    <img className="imagen-detalle" src={img} alt='imagen del producto'/>
                </div>
                <div>
                        <p>{description}</p>
                </div>
            </div>
            <div className="detail">
                <div className="detail-left">
                    <div>
                        <h3>{name}</h3>
                    </div>

                    <div>
                        <p>${price}</p>
                    </div>
                </div>
                <div className="detail-rigth">
                    <div>
                        <p>Envio: {shipping}</p>
                    </div>
                    <div>
                        <p>{nuevoStock} unidades disponibles</p>
                    </div>
                    <div className="button-container">
                       
                        <div>
                            {bandera ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={stock} onAdd={onAdd}/>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default ItemDetail;