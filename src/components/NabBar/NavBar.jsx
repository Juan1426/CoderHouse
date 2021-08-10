import React from "react"

import "./NavBar.css"

const NavBar = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">#NombreOriginal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse right" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">#menú1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">#menú2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">#menú3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">#menú4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar