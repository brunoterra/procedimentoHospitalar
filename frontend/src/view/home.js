import React from 'react'

class Home extends React.Component {
    
    state = {
        saldo : 0
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é um sistema de gerenciamento de pacientes</p>
                
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                        href="#/cadastro-paciente"
                        role="button"><i className="fa fa-users"></i>  
                        Cadastrar Paciente
                    </a>
                </p>
            </div>
        )
    }
}

export default Home
