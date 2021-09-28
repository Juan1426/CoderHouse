import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'

import "./styles/ItemDetail.css"

const ItemDetail = ({id, nombre, precio, desc, img, category, stock}) => {
/*si no hago el spread a la hora de enviar parametros, no puedo trabajar con cara cosa por separado*/


    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    
    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
}    

    return(
        <div className="main-container">
            <div className="itemDetail_container">
                <h2>{nombre}</h2>                
                <div className="img_container">
                    <img src={img} alt={nombre}/>
                </div>
                <h3>Precio: ${precio}</h3>
                <p>{desc}</p>                           
            </div>
            <div className="counter-container">
                <Counter 
                    max={stock} 
                    cantidad={cantidad} 
                    setCantidad={setCantidad} 
                    agregar={handleAdd} 
                    agregado={isInCart(id)}
                />               
            </div>
        </div>
    )

}

export default ItemDetail