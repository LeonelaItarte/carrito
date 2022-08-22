import { useRef, useEffect } from 'react'
import './ModalFinal.css'
import { Link } from "react-router-dom";
import { useState } from 'react';



const ModalFinal = ({ordenID, onClose}) => {

    console.log('asdasdasdasadsas' + ordenID )
    const overlay = useRef(null)
    const Modal = useRef(null)

    const ruta = ordenID !== -1 ? '/' : '/cart'
    const mensaje = ordenID !== -1 ? `Felicitaciones por su compra, su codigo de seguimiento es ${ordenID}` : 'Ha seleccionado productos que no tienen stock por favor revise su carrito'
    const mensajeBoton = ordenID !== -1 ? 'Seguir comprando' : 'volver al carrito'

    const accion = ordenID === -1 ? cerrar : undefined

    function cerrar(){
        onClose(null)
    }

    useEffect(() => {
        if(ordenID != null){
        overlay.current.classList.add("active")
        Modal.current.classList.add("active")
    }
    }, [ordenID])



    if(ordenID == null) {return null}

    return ( 
        <div className="overlay" ref={overlay} >
            <div className="modal" ref={Modal}>
            <h5>{mensaje}</h5> 
            <button onClick={accion}><Link to={ruta}>{mensajeBoton}</Link></button>
            </div>
        </div>
    );

}
 
export default ModalFinal;