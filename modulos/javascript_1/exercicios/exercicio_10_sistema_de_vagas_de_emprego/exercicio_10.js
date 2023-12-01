//Interactive Menu
  let menu
  
  //Vacancies and Candidates
let nextVacancyId = 0;

const JobVacancies = [
  {
    name: "Front-end Dev",
    description: "Vaga para desenvolvedor Front-end JavaScript",
    deadline: 30,
    candidatesCount: 4,
    id: 0
  },
  {
    name: "Front-end Dev 2",
    description: "Vaga para desenvolvedor Front-end JavaScript",
    deadline: 31,
    candidatesCount: 3,
    id: 0
  },
  {
    name: "Front-end Dev 3",
    description: "Vaga para desenvolvedor Front-end JavaScript",
    deadline: 32,
    candidatesCount: 2,
    id: 0
  },
];

/*for (let i = 0; i < JobVacancies.length; i++) {
  JobVacancies[i].id = 0
  JobVacancies[i].id = nextVacancyId++
  console.log(JobVacancies)
}*/

  let Candidates = [
    {
      name: "Souza",
      vacancyId: 0,
    },
    {
      name: "Souza",
      vacancyId: 0,
    },
    {
      name: "Souza",
      vacancyId: 0,
    },
    {
      name: "Souza",
      vacancyId: 0,
    },
    {
      name: "Souza",
      vacancyId: 1,
    },
    {
      name: "Souza",
      vacancyId: 1,
    },
    {
      name: "Souza",
      vacancyId: 1,
    },
    {
      name: "Souza",
      vacancyId: 2,
    },
    {
      name: "Souza",
      vacancyId: 2,
    },
  ];
  let HowManyCandidates = 0;
  let NameOfCandidates = []


  do {
  menu = parseFloat(prompt( "SISTEMA DE VAGAS DE EMPREGO:\n\n[1] Listar vagas disponíveis\n[2] Criar uma nova vaga\n[3] Visualizar uma vaga\n[4] Inscrever um candidato em uma vaga\n[5] Excluir uma vaga\n[6] Sair\n\nSELECIONE UMA DAS OPÇÕES ACIMA:"
  )
);

console.log(JobVacancies)

nextVacancyId = 0
for (let i = 0; i < JobVacancies.length; i++) {
  JobVacancies[i].id = nextVacancyId++
  console.log(JobVacancies)
}
  //Grouping by index
  const CandidatesIndex = Candidates.reduce(function (acumulator, person) {
    if (acumulator[person.vacancyId]) {
      acumulator[person.vacancyId].push(person);
    } else {
      acumulator[person.vacancyId] = [person];
    }
    return acumulator;
  }, {});

  console.log(CandidatesIndex)
// List available vacancies / CASE 1
function ListVacancies() {
  for (let i = 0; i < JobVacancies.length; i++) {
    HowManyCandidates = CandidatesIndex[i];
    console.log(HowManyCandidates);
    alert(
      `ID da vaga: ${JobVacancies[i].id}\nNome da vaga: ${JobVacancies[i].name}\nDescrição: ${JobVacancies[i].description}\nData Limite: ${JobVacancies[i].deadline}\nQuantidade de inscritos: ${JobVacancies[i].candidatesCount}`
    );
  }
}

// Create a new vacancie / CASE 2
function CreateNewVacancie(name, description, deadline) {
  let NewVacancie = {

    name,
    description,
    deadline,
    candidatesCount: 0,
    id: nextVacancyId++
  };
  JobVacancies.push({ ...NewVacancie });
  
}

// Show Vacancy / CASE 3
function ShowVacancy(VacancyIndex) {
  for (let i = 0; i < JobVacancies.length; i++) {
    if (VacancyIndex === parseFloat(JobVacancies[i].id) ) {
      NameOfCandidates = CandidatesIndex[i]
      console.log(NameOfCandidates)
      const AllNames = NameOfCandidates ? NameOfCandidates.map(function(candidate){
        return candidate.name;
      }): [];

      HowManyCandidates = NameOfCandidates ? NameOfCandidates.length : 0;

alert(`Número da vaga: ${VacancyIndex}\n
Nome: ${JobVacancies[i].name}\n
Descrição: ${JobVacancies[i].description}\n
Data limite: ${JobVacancies[i].deadline}\n
Quantidade de candidatos: ${JobVacancies[i].candidatesCount}\n
Nome dos candidatos: ${AllNames.join(', ')}`);
    }
  }
}

 // Register a candidate / CASE 4 
 function NewCandidate(name, index){

  let ConfirmationOfNewCandidate = confirm(`Senhor ${name}, confirme que esta é a vaga desejada: \n\nNome da vaga: ${JobVacancies[index].name}\nDescrição: ${JobVacancies[index].description}\nData Limite: ${JobVacancies[index].deadline}`)

  if(ConfirmationOfNewCandidate == true){
    Candidates.push({name: name, vacancyId: index})
  }

  for(let i = 0; i < JobVacancies.length; i++){
      if(index === JobVacancies[i].id){
    JobVacancies[i].id = JobVacancies[i].candidatesCount += 1
  }
  }

 }

 // Delete a vacancy / CASE 5
 function DeleteVacancy(IndexOfVacancy){
  let ConfirmToDelete = confirm(`Realmente deseja excluir essa vaga? \n\nNome da vaga: ${JobVacancies[IndexOfVacancy].name} \nDescrição: ${JobVacancies[IndexOfVacancy].description} \nLimite de tempo: ${JobVacancies[IndexOfVacancy].deadline}`)

  if(ConfirmToDelete == true){
    JobVacancies.splice(IndexOfVacancy, 1)

    Candidates = Candidates.filter(function(candidate){
      return candidate.vacancyId !== IndexOfVacancy
    })
  }
 }
 

switch (menu) {
  case 1:
    ListVacancies();
  break;

  case 2:
    let name = prompt("Informe o nome da vaga: ");
    let description = prompt("Defina uma descrição para a vaga: ");
    let deadline = prompt("Por fim, informe a data limite dessa vaga[dias]: ");
    confirm(
      `Esses dados estão corretos?\nNome: ${name}\nDescrição: ${description}\nData limite: ${deadline} dias`
    );
    CreateNewVacancie(name, description, parseFloat(deadline));
    alert("Vaga criada!")
  break;

  case 3:
    let VacancyIndex = parseFloat(prompt("Informe o número da vaga: "));
    ShowVacancy(VacancyIndex)
  break;

  case 4:
    let NewName = prompt("Por favor, informe o seu nome: ")
    let NewId = parseFloat(prompt("Deseja se candidatar a qual vaga? Informe o número: "))
    NewCandidate(NewName, NewId)
  break;

  case 5:
    let IndexOfVacancy = parseFloat(prompt("Informe o número da vaga que deseja excluir: "))
    DeleteVacancy(IndexOfVacancy)

  break;

  case 6:
    alert("Obrigado! Volte quando quiser.")
  break;

  default: alert("Opção inválida!")
}
} while (menu !== 6)