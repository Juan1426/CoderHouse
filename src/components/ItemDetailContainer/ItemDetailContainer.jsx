import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import pedirDatos from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

        const {loading, setLoading} = useContext(UIContext)
        const { itemId } = useParams() // definido en la ruta App.js
        const [item, setItem] = useState(null)

        useEffect(() => {

            const db = getFirestore()
            let productos = db.collection("Productos") // Busca en Firestore la collection con nombre "X"
            const item = productos.doc(itemId)
            item.get()
                .then((doc) => {
                setItem({...doc.data(), id: doc.id})
            })
                .finally(()=> {setLoading(false)})

        }, [itemId]) 

        return (
            <div>
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : <ItemDetail {...item}/> //se envia ...item para que reciba los elementos idividualmente
                    
                }
            </div>
        )

}

export default ItemDetailContainer