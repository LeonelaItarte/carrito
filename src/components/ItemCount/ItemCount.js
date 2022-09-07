import "./ItemCount.css"
import {useState} from 'react';

const ItemCount= ({stock, onAdd,initial,mostrarBoton, cambiarPrecio}) =>{
   
    initial = typeof initial == 'undefined' ? 1 :initial

    let [contador, setContador]= useState(initial);

    
    function restar(){
        
        if(contador > 1){
            setContador(
    
            contador = contador - 1 
            
            )
            if(!mostrarBoton){
                cambiarPrecio(contador)
            }
        }
    }
    function sumar(){
      if(contador < stock){
        setContador(

        contador = contador + 1 

        )
        if(!mostrarBoton){
            cambiarPrecio(contador)
        }
      }
    }

    function agregar(){
        if(contador <= stock && stock !== 0){
            onAdd(contador)
            
          }
        
        setContador(0)
    }
    return(
 
        <div className="itemCount">
            <div className="cantidad">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            {mostrarBoton && (<div className="agregarAlCarrito">
                <button onClick={agregar}>Agregar al carrito</button>
            </div>)}
            
        </div>
        

    )
}
export default ItemCount






