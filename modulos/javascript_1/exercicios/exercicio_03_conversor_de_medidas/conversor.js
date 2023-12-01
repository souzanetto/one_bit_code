const measure = parseFloat(prompt("Informe o valor da medida(m):"))

let options = prompt("UNIDADES DE MEDIDA DISPONÍVEIS PARA CONVERSÃO:\n\n A) milímetro(mm)\n B) centímetro(cm)\n C) decímetro(dm)\n D) decâmetro(dam)\n E) hectômetro(hm)\n F) quilômetro(km)\n\n SELECIONE ALGUMA DAS OPÇÕES ACIMA.")

switch(options){
  
  case "A": 
    var new_measure = measure * 1000 
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para milímetro: " + new_measure + "(mm)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break;

  case "B": 
    var new_measure = measure * 100
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para centímetro: " + new_measure + "(cm)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break;

  case "C":
    var new_measure = measure * 10
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para decímetro: " + new_measure + "(dm)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break

  case "D": 
    var new_measure = measure / 10
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para decâmetro: " + new_measure + "(dam)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break

  case "E":
    var new_measure = measure / 100
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para hectômetro: " + new_measure + "(hm)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break

  case "F":
    var new_measure = measure / 1000
    alert("CONVERSÃO REALIZADA COM SUCESSO!\n\n" + "Valor inicial: " + measure + "(m)\n" + "Conversão para quilômetro: " + new_measure + "(km)\n\n" + "OBRIGADO PELA PREFEÊNCIA!")
    break

  defaut:
    alert("Opção Inválida! Por favor, tente novamente.")

}