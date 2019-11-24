import { observable, action, computed } from 'mobx';

class RootStore {
    @observable usuarioLogado = 'Vinicius Gonzalez';
    @observable listaUsuarios = ['Vinicius Gonzalez'];

    @action addUsuario = (usuario) => {
        this.listaUsuarios.push(usuario);
    }

    @computed get totalUsuarios() {
        return this.usersList.length;
    }

}

export default new RootStore();