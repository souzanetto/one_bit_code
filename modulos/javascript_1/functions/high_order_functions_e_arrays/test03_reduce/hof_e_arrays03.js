const ninjas = [
  { nome: "Naruto Uzumaki", aldeia: "Konoha", classe: "Ninja", rank: "Hokage" },
  { nome: "Sasuke Uchiha", aldeia: "Konoha", classe: "Ninja", rank: "Vagabundo" },
  { nome: "Sakura Haruno", aldeia: "Konoha", classe: "Ninja Médica", rank: "Jonin" },
  { nome: "Kakashi Hatake", aldeia: "Konoha", classe: "Ninja Copiador", rank: "Hokage" },
  { nome: "Gaara", aldeia: "Sunagakure", classe: "Kazekage", rank: "Kazekage" },
  { nome: "Hinata Hyuga", aldeia: "Konoha", classe: "Ninja", rank: "Jonin" },
  { nome: "Kiba Inuzuka", aldeia: "Konoha", classe: "Ninja com Cachorro", rank: "Chunin" },
  { nome: "Temari", aldeia: "Sunagakure", classe: "Ninja Ventoso", rank: "Jonin" }
];

const Ninjas = ninjas.reduce(function(acumulador, personagem){
  if(acumulador[personagem.classe]){
    acumulador[personagem.classe].push(personagem)
  }else{
    acumulador[personagem.classe] = [personagem]
  }

  return acumulador
}, {})

console.log(Ninjas)