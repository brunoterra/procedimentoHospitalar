import React from 'react'

import Login from '../view/login'
import CadastroPaciente from '../view/cadastropaciente'
import Home from '../view/home'
import Consulta from '../view/consulta'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro-paciente" component={CadastroPaciente} />
                <Route path="/consulta" component={Consulta} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas