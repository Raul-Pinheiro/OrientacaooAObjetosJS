import { Conta } from "./Conta.js";


export class ContaSalario extends Conta{

    constructor (agencia,cliente){
        super(agencia,0,cliente);
    }
    sacar(valor){
        const taxa = 1.01;
        return super._sacar(valor,taxa);
    }   
}