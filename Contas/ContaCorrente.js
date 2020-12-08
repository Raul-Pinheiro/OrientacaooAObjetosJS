import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    // Atributos
    static numeroDeContas = 0;     
   
    //Construtor
    constructor (agencia,cliente){
      
        super(agencia,0,cliente);
        ContaCorrente.numeroDeContas += 1;

    }    
    //Sobrescrevendo o comportamento de sacar da classe mãe
    sacar(valor){
        let taxa=2;
        return super._sacar(valor,taxa);
    }
}
