import { useRef, useEffect, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import './Modal.css'
import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase';


const Modal = ({open, onClose, setOrdenID}) => {

    const overlay = useRef(null)
    const Modal = useRef(null)

    const {cart,addItem, isInCart,clearCart ,removeItem, quantity, getProductQuantity} = useContext(CartContext)

    const [abrirPopup, setAbrirPopup] = useState(false)

    // esta Variableme dice si la orden se completo o no
    const [completado, setCompletado] = useState(false)

    const [mostrarError, setMostrarError] = useState(false)

    const [modalError, setModalError] = useState(false)

 

    const apellido = useRef(null);
    const nombre = useRef(null)
    const telefono = useRef(null)
    const email = useRef(null);
    const direccion = useRef(null)
    const emailConfirmacion = useRef(null);

 
    useEffect(() => {
        if(open){
        overlay.current.classList.add("active")
        Modal.current.classList.add("active")
    }
    }, [open])

    const createOrder = async () => {
        try {
  
            
            const montoFinal = 0
            const objOrder = {
                buyer: {
                    firstName: nombre.current.value,
                    lastName: apellido.current.value,
                    phone: telefono.current.value,
                    email: email.current.value,
                    address: direccion.current.value
                },
                items: cart,
                montoFinal: montoFinal,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.contador

                

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
               
                const orderAdded = await addDoc(orderRef, objOrder)
             
                setOrdenID(orderAdded.id)
                batch.commit()
                clearCart()
                setCompletado(true);
            } else {
               
                setOrdenID(-1)
            }
        } catch (error) {
           
        } finally {
       
            setAbrirPopup(true)
            onClose()
        }

    }

    const validacionDeEmail=()=>{
     (email.current.value === emailConfirmacion.current.value)?createOrder(): setMostrarError(true)
    }
   
    const validarError=()=>{
        (nombre.current.value === "" || apellido.current.value === "" || telefono.current.value === "" || 
        email.current.value === "" || direccion.current.value === "" 
        || emailConfirmacion.current.value === "")? setModalError(true): validacionDeEmail()
    }

    if(!open) {return null}

    return ( 
        <div className="overlay" ref={overlay} >
            <div className="modal" ref={Modal}>
           
            {modalError  && <h3 className='error'>Por favor verifique que todos los campos esten llenos</h3> }

            <h3>Nombre</h3>
            <input ref={nombre}></input>
            <h3 >Apellido</h3>
            <input ref={apellido}></input>
            <h3>Direccion</h3>
            <input ref={direccion}></input>
            <h3>Telefono</h3>
            <input ref={telefono}></input>
            <h3>Correo electronico</h3>
            <input ref={email}></input>
 
            {!mostrarError  && <h3>Confirma tu correo electronico</h3>}
            {!mostrarError  &&   <input ref={emailConfirmacion}></input> }

            {mostrarError  && <h3 className='error'>Verifique los correos ingresados</h3> }
            {mostrarError  &&  <input ref={emailConfirmacion} className="error2"></input> }
           
            <button onClick={validarError}>Finalizar Compra</button>
            <button onClick={() => {onClose()}}>Cerrar</button>
            </div>
        </div>
    );

}
 
export default Modal;