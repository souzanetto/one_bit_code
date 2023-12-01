let number = parseFloat(prompt("Informe um número: "))
let result = ""

for(var count = 1; count <= 20; count++){
  var multi = number * count
  result += "|  " + number + " X " + count + " = " + multi + "  |\n"
}

alert("A TABUADA DO NÚMERO " + number + " É:\n\n" + result)