menu = 0

do{
menu = parseFloat(prompt("CALCULADORA GEOMÉTRICA\nQual forma geométrica você deseja calcular?\n\n[1] Área do Triângulo\n[2] Área do Retângulo\n[3] Área do Quadrado\n[4] Área do Trapézio\n[5] Área do Círculo\n[6] Sair"))

function TriangleArea(base, height){
  let resultTriangle = base * height / 2
  return resultTriangle
}

function RectangleArea(base, height){
  let resultRectangle = base * height
  return resultRectangle
}

function SquareArea(side){
  let resultSquare = side ** 2
  return resultSquare
}

function TrapeziumArea(BiggerBase, SmallerBase, height){
  let resultTrapezium = (BiggerBase + SmallerBase) * height / 2
  return resultTrapezium
}

function CircleArea(radius, pi = 3.14){
  let resultCircle = pi * radius**2
  return resultCircle
}

switch(menu){
  
  case 1:{
    alert("Informe as medidas a seguir para realizar a calculo: ")
    let baseTriangle = parseFloat(prompt("Informe a medida da base do triângulo[cm]: "))
    let heightTriangle = parseFloat(prompt("Agora a medida da altura[cm]: "))
    let FinishedMeasureTriangle = TriangleArea(baseTriangle, heightTriangle)
    alert("A área do triângulo é exatamente: " + FinishedMeasureTriangle + "cm²")
    break
  }

  case 2:{
    alert("Informe as medidas a seguir para realizar a calculo: ")
    let baseRectangle = parseFloat(prompt("Informe a medida da base[m]: "))
    let heightRectangle = parseFloat(prompt("Agora a medida da altura[m]: "))
    let FinishedMeasureRectangle = RectangleArea(baseRectangle, heightRectangle)
    alert("A área do retângulo é exatamente: " + FinishedMeasureRectangle + "m²")
    break
  }

  case 3:{
    alert("Informe as medidas a seguir para realizar a calculo: ")
    let sideSquare = parseFloat(prompt("Informe a medida dos lados[m]: "))
    let FinishedMeasureSquare = SquareArea(sideSquare)
    alert("A área do quadrado é exatamente: " + FinishedMeasureSquare + "m²")
    break
  }

  case 4:{
    alert("Informe as medidas a seguir para realizar a calculo: ")
    BiggerBaseTrapezium = parseFloat(prompt("Informe a medida da base maior do trapézio[cm]: "))
    SmallerBaseTrapezium = parseFloat(prompt("Agora a medida da base menor[cm]: "))
    heightTrapezium = parseFloat(prompt("Por fim, a medida da altura[cm]: "))
    let FinishedMeasureTrapezium = TrapeziumArea(BiggerBaseTrapezium, SmallerBaseTrapezium, heightTrapezium)
    alert("A área do trapézio é exatamente: " + FinishedMeasureTrapezium + "cm²")
    break
  }

  case 5:{
    alert("Informe as medidas a seguir para realizar a calculo: ")
    let radiusCircle = parseFloat(prompt("Informe a medida do raio do círculo[cm]: "))
    let FinishedMeasureCircle = CircleArea(radiusCircle)
    alert("A área do círculo é exatamente: " + FinishedMeasureCircle + "cm²")
    break
    
  }
  
  case 6:{
    alert("Obrigado por utilizar o programa. Volte sempre!😁")
    break
  }

  default:{
    alert("Desculpe, esse valor é inválido. Tente novamente!😕")
  }
}
}while(menu !== 6)