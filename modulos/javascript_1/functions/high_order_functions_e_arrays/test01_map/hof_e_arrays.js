
const personagensNaruto = [
  { nivel: 38, nome: "Naruto Uzumaki", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 32, nome: "Sasuke Uchiha", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 36, nome: "Sakura Haruno", aldeia: "Konoha", classe: "Ninja Médica" },
  { nivel: 30, nome: "Kakashi Hatake", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 34, nome: "Hinata Hyuga", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 40, nome: "Gaara", aldeia: "Sunagakure", classe: "Kazekage" },
  { nivel: 28, nome: "Rock Lee", aldeia: "Konoha", classe: "Ninja" },
];

//Utilizando um laço de repetição for para realizar 
//a cópia de uma propriedade específica de 
//cada objeto do array:

const classe = []
const nomes = []

for(let i = 0; i < personagensNaruto.length; i++){
  nomes.push(personagensNaruto[i].nome)
}

console.log(nomes)

for(let y = 0; y < personagensNaruto.length; y++){
  classe.push(personagensNaruto[y].classe)
}

console.log(classe)

//Utilizando a função .map para atingir o mesmo resultado:

const names = personagensNaruto.map(function (personagem){
  return personagem.nome
})

console.log(names)

// Retornando mais de uma propriedade:
const NameeLevel = personagensNaruto.map(function (identificação){
  return {nome: identificação.nome, nivel: identificação.nivel}
})

console.log(NameeLevel)