let velocidade = 0

do{
  alert("Velocidade atual = " + velocidade + "km/h")
  velocidade -= 20
  alert("Reduzindo em 20km/h")
  alert("Velocidade atual = " + velocidade + "km/h")
}while(velocidade > 0)