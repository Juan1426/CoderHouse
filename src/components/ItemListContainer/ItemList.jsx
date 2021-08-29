import React from "react"  
import Item from "./Item"

import "./styles/ItemList.css"


const ItemList = ( {productos = []} ) => {

    return (
        <section className="itemList-main ">
            <h2>Productos</h2>
            <div className="itemList_Items">
                {productos.map((prod) => <Item  key={prod.id} {...prod}/> )}
            </div>
        </section>
    )
}

export default ItemList