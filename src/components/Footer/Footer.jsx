import React from "react"

import "./Footer.css"

const Footer = () => {

    return(
        <footer className="footer">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active">Contáctanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">quienes somos</a>
                        </li>
                        <li className="nav-item">                           
                            <a className="nav-link active" href="#"><img src="/files/iconos/facebook.png"></img></a>
                        </li>                                                      
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><img src="/files/iconos/instagram.png"></img></a>
                        </li>                        
                    </ul>

                </div>
            </nav>
        </footer>
    )
}

export default Footer