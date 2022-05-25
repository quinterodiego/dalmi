import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand d-flex align-items-center justify-content-center" href="/">
                    <img src="./img/cubo.png" alt="" />
                    <h1 class="">DALMI</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link h4" to="/" onclick="CargarLogin()">INICIO</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h4" to="/Manager">MANAGER</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h4" to="/Nosotros">NOSOTROS</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h4" to="/Contacto">CONTACTO</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar