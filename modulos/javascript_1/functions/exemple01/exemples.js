//EX 1:
function soma(a, b){
  const value = a + b
  return value
}

let result = soma(7, 3)
console.log(result)

//EX 2:
function CriarProduto(nome, preco, estoque){
  const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque // estoque: estoque
  }
  return produto
}

const notebook = CriarProduto("Notebook Ideapad 3i 256gb Win 11 4gb RAM", 2150, 123)
console.log(notebook)

//EX 3:
function AreaRetangular(altura, largura){
  const area = altura * largura

  return area
}

function AreaQuadrada(lado){
  return AreaRetangular(lado, lado)
}

resultArea = AreaRetangular(7, 9)
console.log(resultArea)

console.log(AreaQuadrada(9))

//EX 4:
function Greetings(texto = "Hello, World!"){
  let text = texto
  return text
  text = "..."
}

function majority(age){
  if(age >= 18){
    return "Maior de idade"
  }else{
    return "Menor de idade"
  }
}

console.log(majority(17))
console.log(Greetings("Sifudê"))