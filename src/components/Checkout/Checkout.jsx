import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import generarOrden from "../../firebase/generarOrden";
import Swal from "sweetalert2";

import "./Checkout.css"

const Checkout = (vaciarCarrito) => {

    const {carrito, sumaTotal } = useContext(CartContext) 
    const [values, setValues] = useState({
        nombre : "",
        tel: "",
        email: "",
        confEmail :""
    })

    const handleImputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validaciones
        if (values.nombre.length >3 && values.email.length > 3 && values.tel.length > 8 && values.email == values.confEmail ) {
            generarOrden(values, carrito, sumaTotal)
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
    }

    return (
            <div className="checkout-mainContainer">
                <h2>Checkout</h2>
                <div className="checkout-container ">
                {!carrito.lenght==[]
                   ? <h3>El Carrito esta vacio</h3> 
                   : 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                                type="text"
                                value={values.nombre}
                                onChange = {handleImputChange}
                                name = "nombre"
                                placeholder="nombre"
                            />
                        </div>

                        <div>
                            <input 
                                type="tel"
                                value={values.tel}
                                onChange = {handleImputChange}
                                name = "tel"
                                placeholder="telefono"
                            />
                        </div>
                        <div>
                            <input 
                                type="email"
                                value={values.email}
                                onChange = {handleImputChange}
                                name = "email"
                                placeholder="email"
                            />
                        </div>

                        <div>
                            <input 
                                type="email"
                                value={values.confEmail}
                                onChange = {handleImputChange}
                                name = "confEmail"
                                placeholder="confirm email"
                            />  
                        </div>

                         <button type="submit">Submit</button>
                    </form>
                }
                </div>
            </div>
        )
    }


export default Checkout