import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import generarOrden from "../../firebase/generarOrden";
import Swal from "sweetalert2";


const Checkout = (vaciarCarrito) => {

    const {carrito, sumaTotal } = useContext(CartContext) //en el corchete traigo la function sumatotal() de CartContext
    
    //creo mi objeto de order(n) con la info de la compra
    const [values, setValues] = useState({
        nombre : "",
        apellido: "",
        email: ""
    })

    const handleImputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //aca meto las validaciones. #Preguntar si existe algo como ExpressValidator en React#
        if (values.nombre.length >3 && values.email.length > 3 && values.tel.length > 8 ) {
            generarOrden(values, carrito, sumaTotal())
                .then( res => {    
                    Swal.fire({
                        icon: "succes",
                        title: "su Compra fue registrada con Exito",
                        text : `guarde este identificador de compra : ${res}`
                    })
                    vaciarCarrito()
                })
                .catch(err => alert(err))
        } else {
            Swal.fire({
                icon: "error",
                title: "Campos invalidos",
                text : "revise su informacion"
            })     
        }

    return (
            <div>
                <h2>Checkout</h2>
                <hr/>
                <div>

                {!carrito.lenght
                   ? <h3>El Carrito esta vacio</h3> 
                   : 
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        value={values.nombre}
                        onChange = {handleImputChange}
                        name = "nombre"
                        placeholder="nombre"
                    />
                  
                        <input 
                        type="tel"
                        value={values.tel}
                        onChange = {handleImputChange}
                        name = "tel"
                        placeholder="telefono"
                    />

                    
                        <input 
                        type="email"
                        value={values.email}
                        onChange = {handleImputChange}
                        name = "email"
                        placeholder="email"
                    />
                    <button type="submit">Submit</button>
                    </form>
                }
                </div>
            </div>
        )
    }
}

export default Checkout