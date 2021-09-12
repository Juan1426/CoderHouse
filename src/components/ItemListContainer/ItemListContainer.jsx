import React, { useContext, useEffect, useState } from 'react'
import {getFirestore} from "../../firebase/config"
import { useParams } from "react-router-dom"
import { UIContext } from '../../context/UIContext'
import pedirDatos from "../../helpers/pedirDatos"
import ItemList from "./ItemList"

import "./styles/ItemListContainer.css"

const ItemListContainer = () => {

    //Aca creo los estados
    const { catId } = useParams()

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
      
    useEffect( ()=> {

        const db = getFirestore()
        const productos = db.collection("Productos")

        productos.get().then((response) => {
            const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))

            setData(data)
        })      
        /** setLoading(true)
        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })*/
            

    }, [catId])

    return (
        <>
            <div className="container-fluid main-itemListCont">
                {loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={data}/>
                }
            </div>
        </>
    )
}

export default ItemListContainer