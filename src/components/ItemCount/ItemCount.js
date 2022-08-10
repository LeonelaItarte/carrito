import {useState} from 'react';

const ItemCount= ({stock, onAdd,initial}) =>{
   
    initial = typeof initial == 'undefined' ? 1 :initial

    let [contador, setContador]= useState(initial);

    
    function restar(){
        
        if(contador > 1){
            setContador(
    
            contador = contador - 1 
            
            )
        }
    }
    function sumar(){
      if(contador < stock){
        setContador(

        contador = contador + 1 

        )
      }
    }

    function agregar(){
        if(contador <= stock && stock !== 0){
            onAdd(contador)
            
          }
        
        setContador(0)
    }
    return(
 
        <div >
            <div>
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
        

    )
}
export default ItemCount






