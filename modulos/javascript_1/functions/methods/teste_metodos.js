let pessoa = {
  nome: "Souza",
  idade: 20,
  Sexo: "Masculino",

  Greetings(){
    console.log("Olá senhor " + this.nome + ". Como vai?")
  }
}

console.log(pessoa)
pessoa.Greetings()