import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import CartWidget from "../CartWidget/CartWidget"

import {Link} from "react-router-dom"

import "./NavBar.css"

const NavBar = () =>{
    return(
        <header>
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link to={"/"} className="navbar-brand SportWear-logo" href="/">
                        <img src={"/files/logos/wolf24.png"}/>
                        <h2>DiscoLobo</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse right" id="navbarNav">
                        <ul className="navbar-nav">

                        <Nav>
                            <NavDropdown id="nav-dropdown-dark-example" title="Categorias" menuVariant="dark">
                                <NavDropdown.Item className="mx-1" to={"/category/remeras"} as={Link}>Remeras</NavDropdown.Item>
                                <NavDropdown.Item className="mx-1" to={"/category/calzado"} as={Link}>Calzado</NavDropdown.Item>
                                <NavDropdown.Item className="mx-1" to={"/category/buzos"} as={Link}>Buzos</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                          
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contáctanos</a>
                            </li>                          
                            <li className="nav-item">
                                <a className="nav-link active">Regístrate</a>
                            </li>
                            <CartWidget />
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar