const cards = ["Valete", "Rei", "Rainha"]
let HowManyCards = 0
let cont = 0
var separator = ""


for(let i = 1; i <= cards.length; i++){
  cont = i + ""
  separator = separator + "\nCarta " + cont
}

do{
var choice = prompt("CARTAS ATUALMENTE NO BARALHO:\n" + separator + "\n\nESCOLHA UMA DAS OPÇÕES ABAIXO:"+ "\n\n [1] Adicionar uma carta\n [2] Retirar uma carta\n [3] Sair\n\n")

switch(choice){

  case "1":

    let NameOfCards = prompt("Qual é o nome da carta?")
    cards.unshift(NameOfCards) 
    HowManyCards = cards.length
    cont = cards.length + ""
    separator = separator + "\nCarta " + cont
    break
    
  case "2":

    alert("A carta escolhida é a " + cards[0])
    cards.shift() 
    separator = separator.slice(8)
    break
}
}while(choice !== "3")