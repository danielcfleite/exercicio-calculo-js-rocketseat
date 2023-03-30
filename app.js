let result = 0
let isPair = false
let isEqual = false

let n1 = prompt('Digite o primeiro número:')
while (isNaN(n1)){
  alert("Esse não é um número válido")
  n1 = prompt('Digite o primeiro número:')
}
let n2 = prompt('Digite o segundo número:')
while (isNaN(n2)){
  alert("Esse não é um número válido")
  n2 = prompt('Digite o segundo número:')
}

let operator = prompt('Selecione um tipo de operação: +, -, /, *')

while (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*" ){
  alert("Esse não é um operador válido")
  n2 = prompt('Digite o operador:')
}

switch (operator) {
  case "+" : {
    result = n1 + n2
    if (result % 2 === 0){
      isPair = true
    }
    if (n1 === n2){
      isEqual = true
    }
    break;
  }
  case "-" : {
    result = n1 - n2;
    if (result % 2 !== 0){
      isPair = true
    }
    break;
  }
  case "/" : {
    result = n1 / n2;
    if (result % 2 !== 0){
      isPair = true
    }
    break;
  }
  case "*" : {
    result = n1 * n2;
    if (result % 2 !== 0){
      isPair = true
    }
    break;
  }
}

alert (isPair)
alert (isEqual)


