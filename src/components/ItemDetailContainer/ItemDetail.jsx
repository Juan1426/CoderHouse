import React, {useState,useEffect } from "react"



const ItemDetail = (id, nombre, precio, desc, img) => {
/*si no hago el spread a la hora de enviar parametros, no puedo trabajar con cara cosa por separado*/

    return(

        <div>
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>            
        </div>
    )

}

export default ItemDetail