let speed = 80

while(speed > 0){
  alert("Velocidade atual: " + speed + "km/h")
  alert("Velocidade reduzida em 20km/h")
  speed -= 20

  if(speed <= 40){
    break
  }
}

alert("O carro parou de andar.☹")