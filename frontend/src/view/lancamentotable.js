import React from 'react'

export default props => {

     const rows = props.lancamentos.map( lancamento => {
        return(
            <tr key={lancamento.id}>
                <td>{lancamento.nome}</td>
                <td>{lancamento.sexo}</td>
                <td>{lancamento.nascimento}</td>
                <td>{lancamento.endereco}</td>
                <td>{lancamento.hospital}</td>
                <td>{lancamento.motivo}</td>
                <td>
                    <button type="button" 
                            className="btn btn-success" 
                            onClick={ e => props.editar(lancamento.id) }>
                                Editar
                    </button>
                    <button type="button" 
                            className="btn btn-danger"  
                            onClick={ e => props.deletar(lancamento.id) }>
                                Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Data Nascimento</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Hospital</th>
                    <th scope="col">Motivo</th>
                    <th scope="col" colSpan="2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}