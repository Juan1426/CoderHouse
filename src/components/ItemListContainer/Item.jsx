import React from "react"
import "./styles/Item.css"

const Item = ({nombre, precio, desc, img}) => {

    return (
        <div className="item_container">
            <li>
                <h2>{nombre}</h2>
                <p>{precio}</p>
                <p>{desc}</p>
                <img sr={img} />
            </li>
        </div>
    )
}
 
export default Item