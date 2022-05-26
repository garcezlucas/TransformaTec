import React from 'react';

export default class StatePerson extends React.Component{

    constructor(props){
    
        super(props);
        this.state = {
            nome: "Lucas",
            profissao: "Oceanografo",
            idade: 27,
        }

        this.atualizarPessoa = this.atualizarPessoa.bind(this)
    
    }

    atualizarPessoa(){
        this.setState({
            nome: this.props.nome,
            profissao: this.props.profissao,
            idade: this.props.idade,
        })
    }

    render(){
        return(
            <div>

                <p>Nome: {this.state.nome}</p>
                <p>Profissão: {this.state.profissao}</p>
                <p>Idade: {this.state.idade}</p>

                <button type="button" onClick={() => this.atualizarPessoa()}>Atualizar Pessoa</button>

            </div>
        )
    }
}