let banco = {
    conta: 123456,
    saldo: 1200,
    tipodeconta: 'Conta Corrente',
    agencia: 001,
    
    buscarSaldo: function(){
        console.log('**Seu saldo atual é de: R$' + this.saldo) 
    },
    deposito: function(valor){
        this.saldo += valor
        console.log('->> Depósito efetuado com sucesso!') 
        console.log('**Seu saldo atual é de: R$' + this.saldo) 
    },
    saque: function(valor){
        this.saldo -= valor
        console.log('->> Saque efetuado com sucesso!') 
        console.log('**Seu saldo atual é de: R$' + this.saldo) 
    },
    getConta: function(){
        console.log('O número da sua conta é: ' + this.conta) 
    }
}


banco.buscarSaldo()
banco.deposito(5000)
banco.saque(500)
banco.getConta()