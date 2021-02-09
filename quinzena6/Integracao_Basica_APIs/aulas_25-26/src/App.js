import React from 'react';
import './App.css';
import CriaUsuario from './Screens/CriaUsuario/CriaUsuario';
import ListaUsuario from './Screens/ListaUsuario/ListaUsuario';


export default class App extends React.Component {

  state = {
    criaUsuario: true
  }

  alteraTela =  () =>{
    this.setState({criaUsuario: !this.state.criaUsuario})
  }

  render(){
    return (
      <div className="App">
          <p>LabenUsers</p>
          <button onClick={this.alteraTela}>{this.state.criaUsuario ? "Ir para a tela de Lista de Usuario" : "Ir para a tela de Criar Usuario"}</button>
          {this.state.criaUsuario ? <CriaUsuario/> : <ListaUsuario/>}
      </div>
    );
  }
}