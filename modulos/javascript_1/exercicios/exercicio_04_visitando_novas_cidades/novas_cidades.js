const name = prompt("Qual é o seu nome?")
const visit = prompt("Já visitou alguma cidade? (Sim/Não)")
let cities = ""
let cont = 0

if(visit == "Sim"){
more_visits = "Sim"

while(more_visits == "Sim"){
var city = prompt("Qual o nome da cidade?")
cities += " - " + city + "\n"
cont++
var more_visits = prompt("Visitou mais alguma cidade? (Sim/Não)")
 }
}

alert("Nome do turista: " + name + "\n" + "Quantidade de cidades visitadas: " + cont + "\n\n" + "Cidades visitadas:\n" + cities)