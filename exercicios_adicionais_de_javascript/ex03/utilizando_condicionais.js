let name = prompt("Informe o seu nome: ")
let speed = 0
let NewSpeed = prompt("Velocidade atual da nave: " + speed + "Km/s\nA qual velocidade você gostaria de acelerar a nave?")
let ConfirmSpeed = confirm("Tem certeza que deseja acelerar a nave a " + NewSpeed + "Km/s?")

if(NewSpeed <= 0){
  alert("A nave está parada. considere partir e aumentar a velocidade.")
}else if(NewSpeed < 40){
  alert("Voce está devagar. Pode aumentar mais.")
}else if(NewSpeed < 80){
  alert("Parece uma boa velocidade para manter.")
}else if(NewSpeed < 100){
  alert("Velocidade alta. Considere diminuir.")
}else{
  alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + name + "\nVelocidade atual: " + NewSpeed + "Km/s")