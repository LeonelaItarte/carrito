import {createContext, useState} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
 
    const [cart, setCart]=useState([])


    const addItem = (productToAdd)=>{
      
        if(!isInCart(productToAdd.id)){

        setCart([...cart, productToAdd])

        }
        else {
            const cartUpdated = cart.map(prod =>{

                if(prod.id === productToAdd.id){

                    const producUpdated = {
                        ...prod,
                        contador: productToAdd.contador
                    }
                    
                    return producUpdated
                }
                else{
                     return prod
                }
            })
            setCart(cartUpdated)
        }
    }


    const quantity = ()=>{

        let accu = 0;

        cart.forEach(prod=>{
            accu += prod.contador 
        })

        return accu
    }

    const isInCart = (id)=>{
    
        return(
            cart.some(prod => prod.id === id)
        )
    }

    console.log(cart)

    const removeItem = (id)=>{

        const cartWithoutitem = cart.filter(prod => prod.id !== id)
        
        setCart(cartWithoutitem)
    }

    const clearCart = () =>{
        setCart([])
    }

    const getProductQuantity =(id)=>{

        const product = cart.find(prod => prod.id === id)
        
        return product?.contador
    }

    return(
        <CartContext.Provider value={{cart,addItem, isInCart,clearCart ,removeItem, quantity, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}