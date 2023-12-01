const hitchedSpaceships = [
  ["Fênix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

const SpaceshipsWith9 = hitchedSpaceships.filter(function(spaceship){
  if(spaceship[1] > 9){
    return spaceship[0]
  }
}) 
const SpaceshipsWith9Names = SpaceshipsWith9.map(function(spaceship){
  return spaceship[0]
})

console.log(SpaceshipsWith9Names)

const spaceshipNothitched = 1 + hitchedSpaceships.findIndex(function(spaceship){
  if(spaceship[2] === false){
    return spaceship 
  }
})
console.log(spaceshipNothitched)

const spaceshipToAlert = hitchedSpaceships.map(function(spaceship){
  return spaceship[0].toUpperCase()
})


console.log(spaceshipToAlert)

alert("SOUZA SPACESHIPS\n\nNaves com mais de 9 tripulantes:\n -" + SpaceshipsWith9Names.join("\n -") + "\n\n Nave com engate pendente é a de número: \n N∘ " + spaceshipNothitched + "\n\nNome das espaçonaves?\n -" + spaceshipToAlert.join("\n -"))
