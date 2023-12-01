let SpaceshipName = prompt("Informe o nome da espaçonave: ")
let WhichCaracter = prompt("Qual caractere do nome " + SpaceshipName + " deseja substituir? ")
let SubstituteCaracter = prompt("Por qual caractere você deseja substituir " + WhichCaracter + "?")

let NewSpaceshipeName = ""
for (let caracters of SpaceshipName){
  if(caracters == WhichCaracter){
    caracters = SubstituteCaracter
    NewSpaceshipeName = NewSpaceshipeName + caracters
  }else{
    NewSpaceshipeName = NewSpaceshipeName + caracters 
  }
}

alert(NewSpaceshipeName)