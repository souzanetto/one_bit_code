let SpaceshipName = prompt("Informe o nome da espaçonave: ")

let InvertedSpaceshipName = ""
for(let cont = SpaceshipName.length - 1; cont >= 0; cont-- ){
  if(SpaceshipName[cont] !== "E" && SpaceshipName[cont] !== "e"){
    InvertedSpaceshipName += SpaceshipName[cont]
  }else{
    break
  }
}

alert("Nome original da nave: " + SpaceshipName + "\nNome após ocultação: " + InvertedSpaceshipName)
