import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/card';
import FormGroup from '../components/form-group'
import LancamentoTable from '../view/lancamentotable'
import axios from 'axios'

class Consulta extends React.Component{  
    
    state = {
        nome : '',
        sexo : '',
        endereco : '',
        nascimento : null,
        hospital : '',
        motivo : '',
        lancamentos: []
     }

     buscar = () => {
         axios
            .get('http://localhost:8080/paciente/getAll', {                              
            }).then( response => {
                this.setState({ lancamentos: response.data })
            }).catch( erro => {
                console.log(erro.response)
            })
     }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-paciente')
    }

    
    editar = (id) => {
        
        axios
            .put(`http://localhost:8080/paciente/update?id=${id}`, {   
            }).then( response => {
                console.log('Paciente atualizado com sucesso!')
            }).catch( erro => {
                console.log('Ocorreu um erro ao atualizar!')
            })

            
        console.log('Editando o Paciente', id)
    }

    delete = (id) => {
        axios
            .delete(`http://localhost:8080/paciente/delete?id=${id}`, {
            }).then( response => {
                console.log('Paciente deletado com sucesso!')
            }).catch( erro => {
                console.log('Ocorreu um erro com deletar!')
            })
    }


    render() {
        return (
            <Card title="Consultar Paciente">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <FormGroup html="inputNome" label="Nome: *">
                                <input type="text" 
                                        class="form-control" 
                                        id="inputNome"
                                        value={this.state.nome}
                                        onChange={e => this.setState({nome: e.target.value})}
                                        placeholder="Digite o nome" />
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Consultar</button>&nbsp;&nbsp;
                            <button onClick={this.prepareCadastrar} type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-componet">
                            <LancamentoTable lancamentos={this.state.lancamentos} 
                                             deletar={this.delete}
                                             editar={this.editar} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(Consulta);