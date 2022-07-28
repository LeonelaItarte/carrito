import ItemCount from "../../ItemCount/ItemCount"
import {useEffect, useState} from 'react';
import { getProducts } from "../../../AsyncMock";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = (props) => {
  let [stock, setStock] = useState(6) ;
  let [mostrar, setMostrar] = useState(false); 
  let [productos, setProductos] = useState([])

  function onAdd(numeroRestar){

   setStock(stock - numeroRestar)

  }

    useEffect(() => {
      getProducts()
      .then(response => {
        
        setProductos(response)
      })
      
      .catch(erorr => console.log(erorr))
      .finally(() => {setMostrar(true)})
    }, [])


    if(!mostrar){
      return (
        <h1>
          Cargando...
        </h1>
      )
    }


  return(
    <div>
          <h1>Todos nuestros productos</h1>
          <ItemList productos={productos}/>

    </div>
  )

}

export default ItemListContainer