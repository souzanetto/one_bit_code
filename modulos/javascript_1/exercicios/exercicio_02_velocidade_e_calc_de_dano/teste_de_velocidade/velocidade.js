Vname1 = prompt("Informe o nome do primeiro veículo:")
Vspeed1 = parseFloat(prompt("Informe a velocidade do primeiro veículo(km/h):"))
Vname2 = prompt("Informe o nome do segundo veículo:")
Vspeed2 = parseFloat(prompt("Informe a velocidade do segundo veículo(km/h):"))

if(Vspeed1 > Vspeed2){
  alert("O veículo " + Vname1 + " é mais rápido!")
} else if(Vspeed2 > Vspeed1){
  alert("O veículo " + Vname2 + " é mais rápido!")
} else{
  alert("Os veículos tem a mesma velocidade!")
}