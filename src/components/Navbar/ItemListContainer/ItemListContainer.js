import ItemCount from "../../ItemCount/ItemCount";
import "./ItemListContainer.css";
import {useEffect, useState} from 'react';
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../../services/firebase/index';


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
//let traerProductos = categoryID ? getProductsByCategoryID : getProducts;

    useEffect(() => {

      const collectionRef = !categoryID ? collection(db,'products') : query(collection(db,'products'), where('category','==',categoryID));

      getDocs(collectionRef).then((response)=>{

        const products = response.docs.map(doc=>{

          const values = doc.data()

          return{id: doc.id,...values}

        })

        setProductos(products)
        

      }).catch(error =>{
             
         }).finally(() => {
               setMostrar(true);
          })
       
          }, [categoryID])


    if(!mostrar){
      return (
        <h1>
          Cargando...
        </h1>
      )
    }


  return(
    <div className="itemListContainer">
          <h1>Todos nuestros productos</h1>
          <ItemList productos={productos}/>

    </div>
  )

}

export default ItemListContainer