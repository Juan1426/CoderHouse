import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import pedirDatos from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

        /*inicio los estados*/
        const {loading, setLoading} = useContext(UIContext)
        const { catId } = useParams()        
        const [item, setItem] = useState(null)
        
        
        useEffect(() => {

            const db = getFirestore()

            let productos = db.collection("Productos") 
            if (catId) {

                productos = productos.where("category_id", "==", catId)
            }

            const item = productos.doc(catId)

            item.get()
                .then((doc) => {
                setItem({...doc.data(), id: doc.id})
            })
                .finally(()=> {setLoading(false)})
            /*
            setLoading(true)
            
            pedirDatos()
                .then( res=> {
                    setItem(res.find(prod => prod.id=== parseInt(itemId))) // lo tengo que parsear porque en el array ID es tipo number, pero el param es String, lo tengo que igualar para comparar
                })

                 */

                .finally(() => {setLoading(false)})
                

        }, [catId]) /*Se monta el componente cuando registra cambios en ItemId. Si no pongo nada, solo lo hace una vez*/

        return (
            <div>
                {
                    loading
                        ? <h2>Cargando...</h2> /*ARMAR COMPONENTE DE CARGANDO ANIMADO*/
                        : <ItemDetail {...item}/> /*le mando un spread de item para que lo recinba como parametros separados*/
                    
                }
            </div>
        )

}

export default ItemDetailContainer