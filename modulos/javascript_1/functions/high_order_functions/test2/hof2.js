
//Função principal: 
function calcular(a, b, operacao){
  console.log("Realizando uma operação: ")
  let result = operacao(a, b)
  return result
}

//Função responsável pela adição:
const adicao = (x, y) => x + y 

//Função responsável pela subtração:
const subtracao = (x, y) => x - y

//Chamada da função como adição:
let resultadoFinalAdd = console.log("Resultado da adição: " + calcular(5, 12, adicao))

//Chamada da função como subtração: 
let resultadoFinalSub = console.log("Resultado da substração: " + calcular(10, 3, subtracao))