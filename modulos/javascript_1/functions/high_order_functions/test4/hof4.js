//Exibindo os itens e valores de um array usando uma High Order Function:
function CatalogOfFruits(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
 })
}

const fruits = ["Banana", "Apple", "Watermelon", "Orange"]

for(let i = 0; i < fruits.length; i++){
  CatalogOfFruits(fruits[i], i, fruits)
}

//Usando o método a função .forEach para reproduzir o mesmo resultado visto acima.
fruits.forEach(CatalogOfFruits)

//Declarando uma função anônima diretamente no .forEach e ainda exibindo o mesmo resultado.
fruits.forEach(function(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
})
