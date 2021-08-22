import React, {useState,useEffect } from "react"
import pedirDatos from "../../helpers/pedirDatos"
import ItemList from "./ItemList"
import "./styles/ItemListContainer.css"

const ItemListContainer = () => {

    //Aca creo los estados
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
      
    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [])

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