
// EX 1: 
// Função recursiva é uma função que chama ela mesma repetidamente.
function dividir(number){
  console.log(number)
  if(number % 2 === 0){
    dividir(number / 2)
  }else{
    return number
  }
}

dividir(256)

// EX 2:
//É fundamental que uma função recursiva tenha uma forma de parar.
function dobrar(num){
  console.log(num)
  if(num > 0){
    dobrar(num * 2)
  }
}

dobrar()

// EX 3:
// Para construir uma função recursiva geralmente partimos de caso de base paa garantir que nossa função não vai continuar se chamando para sempre.
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(numb){
  console.log("Número: " + numb)
  if(numb === 0){
    return 1
  }else if(numb === 1){
    return 1
  }else{
    numb * (numb - 1)
    console.log(numb + " * !" + (numb - 1))
    return numb * fatorial(numb - 1)
  }
}

console.log(fatorial(5))


