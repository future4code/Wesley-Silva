import React from 'react';
import { ButtonContainer } from "./styled";
import { BASE_URL, axiosConfig } from "../../constants/requisicoes"
import axios from "axios"

export default class CriaUsuario extends React.Component {
    
    state = {
        inputNome: "",
        inputEmail: ""
    }

    alterarNome = (evento) => {
        this.setState({inputNome: evento.target.value})
    }

    alterarEmail = (evento) => {
        this.setState({inputEmail: evento.target.value})
    }

    criarUsuario = () =>{
        const body = {
            name: this.state.inputNome, 
            email: this.state.inputEmail
        };

        axios.post(`${BASE_URL}/users`, body, axiosConfig)
        .then(() =>{
           alert(`O usuário ${this.state.inputNome} foi criado`)
           this.setState({
            inputNome: "",
            inputEmail: ""
            }) 
        })
        .catch((erro) => {
            alert(erro.message)
        })
    };
    
    render() {
        return (
            <div>
                <p>Nome</p>
                <input value={this.state.inputNome} onChange={this.alterarNome}/>
                <p>Email</p> 
                <input value={this.state.inputEmail} onChange={this.alterarEmail}/>
                <ButtonContainer>
                    <button onClick={this.criarUsuario}>Criar Usuário</button>
                </ButtonContainer>
            </div>
        );  
    }
}