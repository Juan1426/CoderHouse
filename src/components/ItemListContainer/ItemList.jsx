import React from "react"  
import Item from "./Item"

import "./styles/ItemList.css"


const ItemList = ( {productos = []} ) => {

    return (
        <section >
            <h2>Productos</h2>
            <div className="itemList_container">
                {productos.map((prod) => <Item  key={prod.id} {...prod}/> )}
            </div>
        </section>
    )
}

export default ItemList