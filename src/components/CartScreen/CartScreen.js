import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import "./CartScreen.css"

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito, sumaTotal} = useContext(CartContext)

    return (
        <section className="mainCartScreen-container container">
            <div className="mainCartScreen">
                <h1>Resumen de compra</h1>
                {carrito.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio: ${prod.precio * prod.cantidad}</p>
                        {/*Reemplazar los iconos de React, no me gustan*/}
                        <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                    </div>
                ))}
                <h2>Total: ${sumaTotal()}</h2>
            
                {carrito.length 
                    ?<> 
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button> 
                        <Link to="/checkout">
                            <button className="btn btn-success">
                                Ir al Carrito
                            </button>
                        </Link>
                    </>
                    :<Link to="/">
                        <button className="btn btn-danger">
                            Volver
                        </button>
                    </Link>  
                }
            </div>    
        </section>
    )
}
