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
                <div>
                    <h2>${precio}</h2>               
                    <Link to={`/detail/${id}`} className="btn btn-success">Ver Detalle</Link>
                </div>
            </li>
        </div>
    )
}
 
export default Item