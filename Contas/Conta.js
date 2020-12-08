
export class Conta{
    //Construtor
    constructor (agencia,saldo,cliente){
        if(this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo Conta Diretamente');
        }
        this._agencia=agencia;
        this._saldo=saldo;
        this._cliente=cliente;
        console.log(this.constructor);
     
    }
    //Acessores
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
        
    } 

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }
    //Métodos 
    
    //Método abstrato
    sacar(valor){      
        throw new Error("O método sacar é abstrato e precisa ser sobrescrito nas classes filhas");
    }

    _sacar(valor,taxa){
        const valorSacado=taxa*valor;
        if(this._saldo>=valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    
    depositar(valor){

        if(valor <= 0){
            return;
        } 

        this._saldo += valor;           
       
    }

    transferir(valor,conta){
        const saque=this.sacar(valor);
        conta.depositar(saque); 
    }
}