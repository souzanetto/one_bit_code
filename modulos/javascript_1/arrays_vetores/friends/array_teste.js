let friends = ["Luiz", "Olavo", "Alexandre", "Matheus"];
let age = [18, 18, 20, 23]

for( let i = 0;  i < 4; i++ ){
  if(friends[i] === "Olavo"){
    alert(friends[i] + " é meu irmão." + " Ele tem " + age[i] + " Anos de idade.")
    i++
  }
  alert(friends[i] + " é meu amigo." + " Ele tem " + age[i] + " Anos de idade.")
}