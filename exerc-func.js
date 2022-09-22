//função sem parâmetro
function bemvindo(){
    console.log("Olá! Este é nosso programa com funções.")
}
bemvindo()

//A próxima função vai dizer se o número é par ou ímpar.
function parimp (n1, n2){
    if (n%2 == 0){
        return 'O número é par.'
    } else {
        return 'O número é ímpar.'
    }
}
let res = parimp (4, 7)
console.log(res)

// função com arrow function
const sum = (a, b) => a+b