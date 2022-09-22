var Pessoa = {
    nome: 'Maria',
    signo: 'Aries',
    cidade: 'Recife',
}

var qualidades = ['Responsavel', 'Inteligente', 'Criativa'];

function mostrarPropriedades(){
    for (var propriedade in Pessoa) {
        console.log(`${propriedade}: ${Pessoa[propriedade]}`)
    }
}

function mostrarElementosArray(){
    for (var element of qualidades){
        console.log(element)
    }
}

mostrarPropriedades();
mostrarElementosArray();