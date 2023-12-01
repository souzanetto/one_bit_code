alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let name = prompt("Por favor, nos informe o seu nome: ")
let age = prompt("Agora informe sua idade: ")
var confirm = prompt("Você tem " + age + " anos, correto? [S/N]")

if(confirm == "S"){
  confirm = "Idade confirmada: " + age + " anos"
} else if(confirm == "N"){
  alert("Por favor, informe sua idade correta.")
  let age = prompt("Agora informe sua idade: ")
  var confirm = prompt("Você tem " + age + " anos, correto? [S/N]")
}else{
  alert("Resposta Inválida")
  var confirm = prompt("Você tem " + age + " anos, correto? [S/N]")
}

alert("Nome do usuário: " + name + "\nIdade digitada " + age + " anos" + "\nidade confirmada: " + age + " anos")