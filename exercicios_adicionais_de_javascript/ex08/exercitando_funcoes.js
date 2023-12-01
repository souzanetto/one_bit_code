let velocity = 0
let option = ""
let name = prompt("Informe o nome da nave: ")

function menu(){
  let controls = prompt("CONTROLE DA NAVE:\n\n[1] Acelerar a nave em 5km/s\n[2] Desacelerar 5km/s\n[3] Imprimir dados de bordo\n[4] Sair do propgrama")
  return controls
}

function acceleration(){
  velocity += 5
  alert("Acelerando em 5Km/s")

}

function slowdown(){
  if(velocity < 5){
    alert("A velocidade não pode ser reduzida a menos que zero.")
  }else{
    velocity -= 5
    alert("Desacelerando em 5Km/s")
  } 
}

function OnboardData(){
  alert("Nome da nave: " + name + "\nVelocidade atual: " + velocity + "Km/s")
} 

function GetOut(){
  alert("Saindo do programa...")
}

do{

option = menu()
switch(option){

  case "1":
  acceleration()
    break

  case "2":
  slowdown()
    break

  case "3":
  OnboardData()
    break

  case "4":
  GetOut()
    break
   
  default:{
    alert("Opção inválida. Tente novamente.")
}
}


}while(option !== "4")