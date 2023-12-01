function highOrder(funcao, valor){
  return funcao(valor)
}

const triple = function(x){
  return x * 2
}

console.log(highOrder(triple, 5))