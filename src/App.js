import React from 'react';

import { inject, observer } from 'mobx-react'

@inject('RootStore')
@observer
class App extends React.Component {

  adicionarUsuario = () => {
    if (this.usuario.value == '')
      return;

    this.props.RootStore.addUsuario(this.usuario.value);
    this.usuario.value = '';
  }

  render() {

    const { RootStore } = this.props;

    return (
      <div className="App" style={{ padding: 20 }}>
        <h3>Usuario logado: {RootStore.usuarioLogado}</h3>
        <h3>Total de usuários: {RootStore.listaUsuarios.length}</h3>

        <div style={{ marginTop: 100 }}>
          <h3>Adicionar Usuario</h3>
          <input ref={input => this.usuario = input} type="text" />
          <button onClick={this.adicionarUsuario}>Adicionar</button>
        </div>

        <div style={{ marginTop: 100 }}>
          <h3>Lista de Usuários</h3>

          <ul>
            {RootStore.listaUsuarios.map(usuario => <li>{usuario}</li>)}
          </ul>

        </div>

      </div>
    )
  }
};

export default App;
