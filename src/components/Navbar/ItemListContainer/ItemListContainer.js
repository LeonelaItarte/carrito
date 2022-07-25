import ItemCount from "../../ItemCount/ItemCount"
import {useState} from 'react';

const ItemListContainer = (props) => {
  let [stock, setStock] = useState(6) ;

  function onAdd(numeroRestar){

   setStock(stock - numeroRestar)

  }
  return(
    <div>
          <h1>El stock es de {stock}</h1>
          <ItemCount stock={stock} onAdd={onAdd}/>
    </div>
  )

}

export default ItemListContainer