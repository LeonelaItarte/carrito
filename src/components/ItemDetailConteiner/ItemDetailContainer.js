
import {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import {getDoc,doc} from 'firebase/firestore';
import {db} from '../../services/firebase/index'



const ItemDetailContainer = (props) => {

  let [mostrar, setMostrar] = useState(false); 
  let [producto, setProducto] = useState("")
  let params = useParams();

  
  
// request para pedir algo a una api
// response es la respuesta que nos da la api
    useEffect(() => {

      getDoc(doc(db,'products',params.productId)).then(response =>{
       
        const values = response.data()

        const product= {id:response.id,...values}

        setProducto(product)
      }).catch(erorr => console.log(erorr))
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