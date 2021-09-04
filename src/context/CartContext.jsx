import { createContext, useState } from "react";

// creación del contexto
export const CartContext = createContext()


// custom provider
export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {
        setCarrito([
            ...carrito,
            prod
        ])
    }

    //todas estas funciones son accesibles a todos los elementos "children" que envuelve eñ CartContextProvider

    //elimina un producto si coincide con el ID
    const eliminarDelCarrito = (id) => {
        setCarrito( carrito.filter(prod => prod.id !== id) )
    }


    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    //transforma todo en un Array vacio [] , osea elimina los datos
    const vaciarCarrito = () => {
        setCarrito([])
    }


    const isInCart = (id) => {
        return carrito.some(el => el.id == id)
    }

    //Aca deberia armar una funcion que devuelva el costo total de carrito
    /*********/

    //envio todas las funciones como parametros de "value"
    return (
        <CartContext.Provider value={{carrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

//HACER QUE EL FOOTER NO SUBA

