let ShipName = prompt("Informe o nome da nave: ")
let cont = 0

let Question = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não")
cont = cont + 1

while(Question == "1"){
  Question = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
  cont = cont + 1
}

alert("Nome da nave: " + ShipName + "\nNúmero de dobras espaciais: " + cont)

