//CHARACTER 1
const character1 = prompt("Informe o nome do personagem:")
const power1 = parseFloat(prompt("Qual é o Poder de Ataque do personagem " + character1 + "?"))

//CHARACTER 2
const character2 = prompt("Informe o nome do outro personagem:")
var health_points = parseFloat(prompt("Qual é a quantidade de pontos de vida do personagem " + character2 + "?"))
const defense_power = parseFloat(prompt("Qual é o poder de defesa do personagem " + character2 + "?"))
const shield = prompt("O personagem " + character2 + " possui um escudo? [sim/não]")

//FIGHT
if(power1 > defense_power && shield == "não"){
  var damage = power1 - defense_power
}else if(power1 > defense_power && shield == "sim"){
  var damage = (power1 - defense_power) / 2
}else if(power1 <= defense_power){
  var damage = 0
}
const new_health_points = health_points - damage 

//RESULTS
alert("DADOS ATUALIZADOS DA BATALHA:\n\n" +
character1 + ":\n" + "Poder de ataque = " + power1 + "\n\n" +
character2 + ":\n" + "Pontos de vida(antes) = " + health_points + "\n" + "Pontos de vida(depois) = " + new_health_points + "\n" + "Dano sofrido = " + damage + "\n" + "Poder de defesa = " + defense_power + "\n" + "Escudo utilizado? " + shield)