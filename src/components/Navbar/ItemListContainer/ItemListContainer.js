import ItemCount from "../../ItemCount/ItemCount"
import {useEffect, useState} from 'react';
import { getProducts, getProductsByCategoryID} from "../../../AsyncMock";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  let [stock, setStock] = useState(6) ;
  let [mostrar, setMostrar] = useState(false); 
  let [productos, setProductos] = useState([])
  let {categoryID} = useParams()

  function onAdd(numeroRestar){

   setStock(stock - numeroRestar)

   }
// request para pedir algo a una api
// response es la respuesta que nos da la api
let traerProductos = categoryID ? getProductsByCategoryID : getProducts;

    useEffect(() => {

        traerProductos(categoryID).then((response) => {
                setProductos(response);
            }).catch(error =>{
                console.log(error)
            }).finally(() => {
                setMostrar(true);
            })}, [categoryID])


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