var value1
var value2
var oper
var readlineSync = require('readline-sync');
operator = readlineSync.question("Insira o simbolo da operacao que deseja efetuar: (+), (-),(*) ou (/)? : \n");
value1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
value2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function doOperation(operator, value1, value2) {
    if (operator == "+") {
        return value1 + value2;
    } else if
        (operator == "-") {
        return value1 - value2;
    } else if
        (operator == "*") {
        return value1 * value2;
    } else if
        (operator == "/") {
        return value1 / value2;
    } else {
        throw new Error('Operação inválida');
    }
}


console.log('O resultado é', doOperation(operator, value1, valor2)) 
