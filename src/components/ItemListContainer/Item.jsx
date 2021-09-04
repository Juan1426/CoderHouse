import React from "react"
import { Link } from "react-router-dom"
import "./styles/Item.css"

const Item = ({nombre, precio, desc, img, id}) => {

    return (
        <div className="item_container">
            <li>
                <h2>{nombre}</h2>
                <div className="img_container">
                    <img src={img} />
                </div>
                <p>{desc}</p>
                <p>${precio}</p>               
                <Link to={`/detail/${id}`} className="btn btn-success">Ver Detalle</Link>
            </li>
        </div>
    )
}
 
export default Item