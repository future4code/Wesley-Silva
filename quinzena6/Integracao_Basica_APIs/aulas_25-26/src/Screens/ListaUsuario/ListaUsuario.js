import React from 'react';
import {ItemListaUsuario} from "./styled"
import { BASE_URL, axiosConfig } from "../../constants/requisicoes"
import axios from "axios"


export default class ListaUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount () {
        this.pegaUsuario();
    }

    pegaUsuario = async () =>{
        try{
            const resposta = await axios
            .get(`${BASE_URL}/users`, axiosConfig)
            this.setState({usuarios: resposta.data});
        } 
        catch (erro) {
            alert(erro.message);
        }
    }    

    apagaUsuario = (id) => {
        axios
        .delete(`${BASE_URL}/users/${id}`, axiosConfig)
        .then(() => {
            alert("Usuário deletado com sucesso!");
            this.pegaUsuario() 
        })
        .catch((erro) => {
            alert(erro.message);
        });
    };

    render() {
        const ListaUsuario = this.state.usuarios.map((item) =>{
            return(
                <ItemListaUsuario key={item.id}>
                    {item.name}
                    <button onClick={() =>{this.apagaUsuario(item.id)}}>x</button>
                </ItemListaUsuario>
            )
        })
        return (
            <div>
                {ListaUsuario}
            </div>
        );  
    }
}