export class SistemaAutenticacao {
    static login(usuario, senha) {
        if (SistemaAutenticacao.autenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;
    }

    //Verifica se existe o metodo autenticar no usuario que deseja logar no sistema e se ele é uma função;

    static autenticavel(usuario) {
        return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }
}