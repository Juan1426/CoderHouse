import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <Link to="/cart">
            <div className="cart-widget">               
                <img src="/files/iconos/carritoVacioBlanco.png" />
                <span>{cantidadCarrito()}</span>                    
            </div>
        </Link>
    )
}

export default CartWidget