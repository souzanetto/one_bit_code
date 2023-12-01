const matriz = [
  [0, 1, 2, 3, 4, 5],
  ["A", "B", "C", "D", "E", "F"],
  [true, false, true, false, true, false]
]
console.log(matriz)
console.table(matriz)
console.log(matriz[0][0])

for(let i = 0; i < matriz.length; i++){
  for(let j = 0; j < matriz[i].length; j++){

   let element = matriz[i][j]
    console.table("Coordenada: (" + i + "," + j + ")" + " Valor = " + element)

  }
}