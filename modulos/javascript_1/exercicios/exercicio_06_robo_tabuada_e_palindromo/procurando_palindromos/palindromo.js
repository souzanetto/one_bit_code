const word = prompt("Informe uma palavra: ")
let palindrome = ""

for(let value = word.length - 1 ; value >= 0; value--){
  palindrome += word[value]
}

if(word === palindrome){
  alert("A palavra " + word + " é um palíndromo\n" + word + " === " + palindrome)
}else{
  alert("A palavra " + word + " não é um palíndromo\n" + word + " === " + palindrome)
}
