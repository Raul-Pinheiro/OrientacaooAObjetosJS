import { Conta } from "./Conta.js";


export class ContaPoupanca extends Conta{

    constructor (agencia,cliente){
        super(agencia,0,cliente);
    }
    sacar(valor){
        const taxa = 1.02;
        return super._sacar(valor,taxa);
    }
}