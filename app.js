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
  operator = prompt('Digite o operador:')
}

switch (operator) {
  case "+" : {
    result = Number(n1)+ Number(n2)
    if (result % 2 === 0){
      isPair = true
    }
    if (n1 === n2){
      isEqual = true
    }
    resultsMessage(result, isPair, isEqual, n1, n2)
    break;
  }
  case "-" : {
    result = Number(n1) - Number(n2)
    if (result % 2 === 0){
      isPair = true
    }
    if (n1 === n2){
      isEqual = true
    }
    resultsMessage(result, isPair, isEqual, n1, n2)
    break;
  }
  case "/" : {
    result = Number(n1) / Number(n2);
    if (result % 2 === 0){
      isPair = true
    }
    if (n1 === n2){
      isEqual = true
    }
    resultsMessage(result, isPair, isEqual, n1, n2)
    break;
  }
  case "*" : {
    result = Number(n1) * Number(n2)
    if (result % 2 === 0){
      isPair = true
    }
    if (n1 === n2){
      isEqual = true
    }
    resultsMessage(result, isPair, isEqual, n1, n2)
    break;
  }
}

function resultsMessage (result, isPair, isEqual, n1, n2) {
  if (isPair === true && isEqual === false) {
    alert (`O resultado foi ${result} o número é par e os números ${n1} e ${n2} são diferentes`)
  }
  else if (isPair === false && isEqual === true) {
    alert (`O resultado foi ${result} o número não é par e os números ${n1} e ${n2} são iguais`)
  }
  else if (isPair === true && isEqual === true){
    alert (`O resultado foi ${result} o número é par e os números ${n1} e ${n2} são iguais`)
  }
  else {
    alert (`O resultado foi ${result} o número não é par e os números ${n1} e ${n2} são diferentes`)
  }
}


