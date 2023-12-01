//Função principal: 
function calcular(a, b, operacao){
  console.log("Realizando uma operação: ")
  let result = operacao(a, b)
  return result
}

//Responsável pela adição. Função declarada diretamente na passagem de argumentos para função calcular()
let ResultadoFinalAdd = calcular(3, 7, function(x, y){
console.log("Realizando uma adição: " )
return x + y
})
console.log(ResultadoFinalAdd)

//Responsável pela subtração. Função declarada diretamente na passagem de argumentos para função calcular()
let ResultadoFinalSub = calcular(15, 12, function(x, y){
  console.log("Realizando uma operação: ")
  return x - y
}) 
console.log(ResultadoFinalSub)
