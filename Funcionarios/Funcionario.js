export class Funcionario {

    constructor(nome, cpf, salario) {
        if (this.constructor == Funcionario) {
            throw new Error('Essa classe só pode ser chamada pelas classes filhas');
        }
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;

    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}