const ninjasComNivel = [
  { nome: "Naruto Uzumaki", aldeia: "Konoha", classe: "Ninja", rank: "Hokage", nivel: 78 },
  { nome: "Sasuke Uchiha", aldeia: "Konoha", classe: "Ninja", rank: "Vagabundo", nivel: 42 },
  { nome: "Sakura Haruno", aldeia: "Konoha", classe: "Ninja Médica", rank: "Jonin", nivel: 95 },
  { nome: "Kakashi Hatake", aldeia: "Konoha", classe: "Ninja Copiador", rank: "Hokage", nivel: 61 },
  { nome: "Gaara", aldeia: "Sunagakure", classe: "Kazekage", rank: "Kazekage", nivel: 17 },
  { nome: "Hinata Hyuga", aldeia: "Konoha", classe: "Ninja", rank: "Jonin", nivel: 88 },
  { nome: "Kiba Inuzuka", aldeia: "Konoha", classe: "Ninja com Cachorro", rank: "Chunin", nivel: 50 },
  { nome: "Temari", aldeia: "Sunagakure", classe: "Ninja Ventoso", rank: "Jonin", nivel: 73 }
];

ninjasComNivel.sort(function(a, b){
  return a.nivel - b.nivel
})
console.log(ninjasComNivel)

ninjasComNivel.sort(function(a, b){
  return b.nivel - a.nivel 
})

console.log(ninjasComNivel)




