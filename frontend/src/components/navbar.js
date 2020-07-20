import React from 'react'

import NavBarItem from '../components/navbarItem'

function NavBar() {

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="#/login" className="navbar-brand">Projeto Hospital</a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/login" label="Home" />
                        <NavBarItem href="#/cadastro-paciente" label="Cadastrar Paciente" />
                        <NavBarItem href="#/consulta" label="Consultar" />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NavBar
