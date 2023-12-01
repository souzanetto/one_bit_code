let LyDistance = parseFloat(prompt("Informe a distância em anos-luz: "))
let ConvertOption = parseFloat(prompt("Selecione a unidade de medida para a qual deseja converter:\n\n[1] Parsec (pc)\n[2] Unidade Astronômica (AU)\n[3] Quilômetros (km) "))

let UnityName = "" 
let LyConverted = 0
let acronym = ""

switch(ConvertOption){

  case 1:
    UnityName = "Parsec (pc)"
    LyConverted = LyDistance * 0.306601
    acronym = " pc"
  break

  case 2:
    UnityName = "Unidade Astronômica (AU)"
    LyConverted = LyDistance * 63241.1
    acronym = " AU"
  break

  case 3:
    UnityName = "Quilômetros (km)"
    LyConverted = LyDistance * (9.5 * Math.pow(10,12))
    acronym = " km"
  break
  default:
    alert("Distância em anos-luz: " + LyDistance + " l.y\nUnidade não identificada: Conversão fora do escopo.")
}

alert("Distância digitada em anos-luz: " + LyDistance + " l.y. \nConversão desejada: " + UnityName + "\nDistância convertida: " + LyConverted + acronym)