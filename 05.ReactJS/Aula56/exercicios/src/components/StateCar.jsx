import React from 'react';

export default class StateCar extends React.Component {

    constructor(props) {
        super(props);
        this.modelo = "fusca"
        this.state = {
            ligado: false,
            velocidade: 0
        }

    }

    ligarDesligar(){
        this.setState({ligado: !this.state.ligado})
    }

    acelerar(){
        let vel = this.state.velocidade + 0.5
        this.setState({velocidade: vel})
    }

    frear(){
        let vel = this.state.velocidade - 0.5
        this.setState({velocidade: vel})
    }

    parar(){
        //this.state.velocidade = 0
        this.setState({velocidade: 0})
    }

    render(){
        return(
            <div>

                <p>Carro: {this.modelo}</p>

                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>

                <p>Velocidade: {this.state.velocidade}</p>
                
                <button type="button" onClick={() => this.ligarDesligar()}>Ligar/Desligar</button>
                
                <button type="button" onClick={() => this.acelerar()}>Acelerar</button>

                <button type="button" onClick={() => this.frear()}>Frear</button>

                <button type="button" onClick={() => this.parar()}>Parar</button>

                

            </div>
        )
    }
}




