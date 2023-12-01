/*
Basicamente, para criar novos elementos para o HMTL usando o JS através do DOM, fazemos da seguinte forma:

1. Criar o elemento com a função createElement()
2. Adicionar conteúdo a esse elemento
3. Adicionar esse elemento como filho de algum outro
*/ 

function addInput(){
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'New Input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}