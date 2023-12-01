
let patient = [," 1° Olavo" ," 2° Matheus" ," 3° Luiz"]
let separator = patient.join("\n ")

do{
var choice = prompt("LISTA DE PACIENTES AUTAL:\n" + separator + "\n\n SELECIONE UMA DAS OPÇÕES ABAIXO:\n\n [1] Novo paciente\n [2] Consultar paciente\n [3] Sair")

switch(choice){

  case "1":
    let NewPatient = prompt("Informe o nome do novo paciente: ")
    var NewLength = patient.push(" " + patient.length + "° " + NewPatient)
    separator = patient.join("\n ")
     break  
  case "2":
    let patient_attended = patient[1].slice(4)
    alert("O paciente " + patient_attended + " será consultado agora! Por favor, Aguarde mais um momento.")
    patient.splice(1,1)
    separator = patient.join("\n ")
     break
  case "3":
    alert("FOI UM PRAZER RECEBE-LO! ATÉ OUTRO DIA.")
 }
}while(choice != "3")