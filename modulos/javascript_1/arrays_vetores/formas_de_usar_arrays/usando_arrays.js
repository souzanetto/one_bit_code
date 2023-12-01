const array = ["Nami", "Usopp", "Sanji", "Chopper"]
console.log(array)

//ADICIONAR ELEMENTOS

//Função .push()
array.push("Robin")
array.push("Franky")
array.push("Brook")
array.push("Jimbei")
console.log(array)

//Função .unshift()
array.unshift("Zoro")
array.unshift("Luffy")
console.log(array)

//REMOVER ELEMENTOS

//Função .pop()
let removed_element = array.pop()
console.log(array)
console.log(removed_element)

//Função .shift()
removed_element = array.shift()
console.log(array)
console.log(removed_element)

//PESQUISAR POR UM ELEMENTO

//Função .includes()
let result = array.includes("Sanji")
let second_result = array.includes("Kin'emon")
console.log(result)
console.log(second_result)

//Função .indexOf()
result = array.indexOf("Franky")
console.log(result)

//CORTAR E CONCATENAR

//Função .slice()
let originals = array.slice(0, 5)
let grand_line = array.slice(-3)
console.log(array)
console.log(originals)
console.log(grand_line)

//Função .concat()
let StrawHats = originals.concat(grand_line, "Jimbei")
console.log(StrawHats)

//SUBSTITUIÇÃO DOS ELEMENTOS

//Função .splice()
let removed = StrawHats.splice(0, 1, "Roronoa Zoro")
console.log(StrawHats)
console.log(removed)

// ITERAR SOBRE OS ELEMENTOS

for(let i = 0; i <= StrawHats.length; i++){
    let members = StrawHats[i]
    console.log("O valor " + members + " se encontra na posição " + i) 
}
