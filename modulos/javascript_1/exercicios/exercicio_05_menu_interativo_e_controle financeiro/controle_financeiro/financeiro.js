let money = parseFloat(prompt("QUAL É A QUANTIDADE DE DINHEIRO DISPONÍVEL?"))

if(money >= 0){
do{
  var choice = prompt("O TOTAL DE DINHEIRO DISPONÍVEL É:\n\n - R$" + money + "\n\n A) Adicionar dinheiro\n B) Retirar dinheiro\n C) Sair\n\n OBRIGADO PELA PREFERÊCIA!")

  switch(choice){

  case "A":
    let add = parseFloat(prompt("QUANTO DINEHIRO VOCÊ DESEJA ADICIONAR?"))
    money += add
    break

  case "B":
    var subtract = parseFloat(prompt("QUANTO DINEHIRO VOCÊ DESEJA SUBTRAIR?"))
    money -= subtract
    break

  case "C":
    alert("TUDO BEM, VOLTE SEMPRE!")
    break

  }
 }while(choice !== "C")
}