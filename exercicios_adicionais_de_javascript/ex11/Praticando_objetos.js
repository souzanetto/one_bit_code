const spaceShip = {
  name: "",
  type: "",
  AtualVelocity: 0,
  MaxVelocity: 0
}

let spaceShipName = prompt("Informe o nome da espaço-nave: ")
if(spaceShipName){
  spaceShip.name = spaceShipName
}
let spaceShipType = prompt("Informe o tipo da espaço-nave: ")
if(spaceShipType){
  spaceShip.type = spaceShipType
}
let spaceShipMaxVelocity = parseFloat(prompt("Por fim, a velocidade máxima da espaço-nave: "))
if(spaceShipMaxVelocity){
  spaceShip.MaxVelocity = spaceShipMaxVelocity
}

let menu = 0

do{
menu = parseFloat(prompt("Deseja parar ou acelerar a espaço-nave?\n\n[1] Acelerar\n[2] Parar\n"))

function stopSpaceShip(){
  alert("Parando a espaço-nave...\n\nNome: " + spaceShip.name + "\nTipo: " + spaceShip.type + "\nÚltima velocidade: " + spaceShip.AtualVelocity + "\nVelocidade máxima: " + spaceShip.MaxVelocity )
}

function speedUpSpaceShip(){
  let NewVelocity = parseFloat(prompt("A espaço-nave está a " + spaceShip.AtualVelocity + "Km/s\n\nEm quantos Km/s você deseja acelerar? "))
  if(spaceShip.AtualVelocity > spaceShipMaxVelocity){
    alert("A velocidade desejada ultrapssa o limite de velocidade da nave\n\nVelocidade atual: " + spaceShip.AtualVelocity + "\nVelocidade máxima: " + spaceShip.MaxVelocity)
  }else{
    spaceShip.AtualVelocity += NewVelocity
  }
}

switch(menu){
  
  case 1:
    speedUpSpaceShip()
  break
  
  case 2:
    stopSpaceShip()
  break
  
  default:
  alert("Opção inválida! Tente novamente.")
 }
}while(menu !== 2)