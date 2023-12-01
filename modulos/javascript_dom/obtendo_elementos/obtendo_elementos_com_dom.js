//Vamos usar a função show() para executar todos os tipos de captura de elementos usando o DOM.
function show(){

// Obtendo um elemento a partir de seu 'id'
let list = document.getElementById('contact-list')
console.log(list)

//Obtendo vários elmentos (HTMLCollection) a partir de sua TagName 
const listTagName = document.getElementsByTagName('li')
console.log(listTagName)

//Obetendo elmentos a partir de sua classe (HTMLCollection)
const listByClass = document.getElementsByClassName('contact-input')
console.log(listByClass)

//Agora a partir de seu nome (Nodelist)
const listByName = document.getElementsByName('contact1')
console.log(listByName)

//Podemos também fazer isso a partir de uma query, como no CSS. (Nodelist)
const listQueryAll = document.querySelectorAll("#contact-list > li > label")
console.log(listQueryAll)

//Idêntico ao anterior, porém, encerra sua captura no primeiro elemnto que atenda as características esperadas.
//Tanto neste quanto no anterior, podemos acessar propriedades internas do elemento obtido. '(...) > li > label'
const listQuery = document.querySelector('#contact-list > li > label')
console.log(listQuery)
}



