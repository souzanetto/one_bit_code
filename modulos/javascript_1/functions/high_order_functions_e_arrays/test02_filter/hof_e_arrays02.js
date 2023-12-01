const personagensNaruto = [
  { nivel: 38, nome: "Naruto Uzumaki", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 32, nome: "Sasuke Uchiha", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 36, nome: "Sakura Haruno", aldeia: "Konoha", classe: "Ninja Médica" },
  { nivel: 30, nome: "Kakashi Hatake", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 34, nome: "Hinata Hyuga", aldeia: "Konoha", classe: "Ninja" },
  { nivel: 40, nome: "Gaara", aldeia: "Sunagakure", classe: "Kazekage" },
  { nivel: 28, nome: "Rock Lee", aldeia: "Konoha", classe: "Ninja" },
];

const PersonagensFortes = personagensNaruto.filter(function(personagem){
  if(personagem.nivel > 32){
    return personagem.nivel
  }
})
console.log(PersonagensFortes)

const Ninjas = personagensNaruto.filter(function(personagem){
  if(personagem.classe === "Ninja"){
    return personagem.classe
  }
})
console.log(Ninjas)
 