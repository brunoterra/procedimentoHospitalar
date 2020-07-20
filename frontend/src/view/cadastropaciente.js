import React from 'react'

import { withRouter} from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import axios from 'axios'

class CadastroPaciente extends React.Component {

    state = {
        nome : '',
        sexo : '',
        endereco : '',
        nascimento : null,
        hospital : '',
        motivo : ''
     }

     entrar = () => {
         axios
            .post('http://localhost:8080/paciente/save', {
                nome : this.state.nome,
                sexo : this.state.sexo,
                endereco : this.state.endereco,
                nascimento : this.state.nascimento,
                hospital : this.state.hospital,
                motivo : this.state.motivo
            }).then( response => {
                console.log(response)
            }).catch( erro => {
                console.log(erro.response)
            })
     }

    cancelar = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            
            <Card title="Cadastro de Paciente">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                        id="inputNome"
                                        name="nome"
                                        className="form-control"
                                        onChange={e => this.setState({nome: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Sexo: *" htmlFor="inputSexo">
                                <input type="text"
                                        id="inputSexo"
                                        name="sexo"
                                        className="form-control"
                                        onChange={e => this.setState({sexo: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Endereco: *" htmlFor="inputEndereco">
                                <input type="text"
                                        id="inputEndereco"
                                        name="endereco"
                                        className="form-control"
                                        onChange={e => this.setState({endereco: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Data de Nascimento: *" htmlFor="inputNascimento">
                                <input type="date"
                                        id="inputNascimento"
                                        name="nascimento"
                                        className="form-control"
                                        onChange={e => this.setState({nascimento: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Local da Internação: *" htmlFor="inputHospital">
                                <input type="text"
                                        id="inputHospital"
                                        name="hospital"
                                        className="form-control"
                                        onChange={e => this.setState({hospital: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Motivo Internação: *" htmlFor="inputMotivo">
                                <input type="text"
                                        id="inputMotivo"
                                        name="motivo"
                                        className="form-control"
                                        onChange={e => this.setState({motivo: e.target.value})} />
                            </FormGroup>
                            <button onClick={this.entrar} type="button" className="btn btn-success">Salvar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
            
        )
    }
}

export default withRouter( CadastroPaciente )