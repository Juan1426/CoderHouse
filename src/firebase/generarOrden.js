import firebase from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "./../firebase/config";

const generarOrden = (buyer, carrito, sumaTotal) => {

return new Promise((resolve, reject) => {

    const db = getFirestore()
    const orders = db.collection("orders") // referencio a la coleccion "X" (orders)

    const newOrder = {
        buyer : buyer,
        items : carrito, // puedo hacer un spread y no pasarlo tal cual
        total : sumaTotal(),
        date : firebase.firestore.Timestamp.fromDate(new Date())//metodo de Firestore que me da una fecha en formato "microsegundos"
    }

    orders.add(newOrder) //me da un objeto con la estructura NewOrder
        .then((res) => {
            resolve(res.id)
        })
        .catch((err) => {
            reject(err)
        })

  
    })

}

export default generarOrden