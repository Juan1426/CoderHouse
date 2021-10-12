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
                    <div className="productos" key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio: ${prod.precio * prod.cantidad}</p>
                        <div className="tacho"  onClick={() => eliminarDelCarrito(prod.id)}><BsFillTrashFill /><span>eliminar producto</span></div>
                    </div>
                ))}
                <h2>Total: ${sumaTotal()}</h2>
            
                {carrito.length 
                    ?<> 
                        <Link to="/checkout">
                            <button className="btn btn-success">
                                Terminar mi compra
                            </button>
                        </Link>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button> 
                        
                        <Link to="/">
                            <button className="btn btn-warning">
                                Volver
                            </button>
                        </Link>
                    </>
                    :
                        <Link to="/">
                            <button className="btn btn-warning">
                                Volver
                            </button>
                        </Link>  
                }
            </div>    
        </section>
    )
}
