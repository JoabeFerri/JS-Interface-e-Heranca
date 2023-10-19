

export class ContaPoupanca {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            console.log(`Valor sacado! \n Você possui R$${this._saldo}`);
            return valor;
        }

    };

    depositar(valor){
        if(valor <= 0){
         return;
        }

        //ou if(valor <= 0) return;
        this._saldo += valor;
    };

    transferir(valor, conta){
        conta.cidade = "São Paulo"
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    };
}