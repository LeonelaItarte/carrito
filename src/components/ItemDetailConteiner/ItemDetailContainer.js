
import {useEffect, useState} from 'react';
import { getProduct } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";


const ItemDetailContainer = (props) => {
  let [mostrar, setMostrar] = useState(false); 
  let [producto, setProducto] = useState("")
  let params = useParams();

  
  
// request para pedir algo a una api
// response es la respuesta que nos da la api
    useEffect(() => {
      getProduct(params.productId)
      .then(response => {
        
        setProducto(response)
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
    <div className="item-detail-container">
         
          <ItemDetail  {...producto}/>
    </div>
  )

}

export default ItemDetailContainer