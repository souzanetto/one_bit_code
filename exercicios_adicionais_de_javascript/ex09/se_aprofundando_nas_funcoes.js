let menu
let spaceshipVelocity = 150

do {

menu = parseFloat(prompt("DESEJA INICIAR?\n\n[1] Iniciar desaceleração\n[2] Sair do programa"))

function Startslowdown(start){

  let result = start()

  if(result !== undefined && result > 0){
    alert("Velocidade diminuída em 20km/s\nVelocidade atual: " + result + "km/s")
  }else{
    alert("A nave está aberta. As comportas podem ser abertas.")
  }
  
  }

switch(menu) {

  case 1:
    let slowdown = function(){
      spaceshipVelocity -= 20
     return spaceshipVelocity
    } 
    Startslowdown(slowdown)
  
  break;

  case 2:
    alert("Encerrando programa...")
  break;

  default: 
    alert("Opção inválida! Tente novamente.")
  break;
}
}while (menu !== 2 && spaceshipVelocity > 0);