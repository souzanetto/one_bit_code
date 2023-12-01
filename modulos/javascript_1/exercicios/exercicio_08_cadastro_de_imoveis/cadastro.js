//MENU INTERATIVO



let All_properties = [];
let cont = 0

do {
  var menu = prompt(
    "                                  CADASTRO DE IMÓVEIS\n\n TOTAL DE IMÓVEIS CADASTRADOS:\n" + cont + "\n\n SELECIONE UMA DAS OPÇÕES ABAIXO:\n\n [1] Adicionar um novo imóvel\n [2] Exibir imóveis já salvos\n [3] Sair"
  );

  switch (menu) {
    case "1": 
      let property = {}

      alert("PARA SALVAR SEU IMÓVEL RESPONDA AS SEGUINTES PERGUNTAS: ");
      property.NameOfProp = prompt("Informe o nome do proprietário: ");
      property.HowManyRoom = prompt("Quantos quartos há no imóvel? ");
      property.HowManyBath = prompt("Quantos banheiros há no imóvel: ");
      property.Garage = prompt("O imóvel possui garagem?[Sim/Não] ");

       const confirma = confirm("Tem certeza que deseja salvar este imóvel?\n\n" + "Nome do properietário: " + property.NameOfProp + "\nQuantidade de quartos: " + property.HowManyRoom + "\nQuantidade de banheiros: " + property.HowManyBath + "\nPossui garagem? " + property.Garage)

      if(confirma){
        All_properties.push(property)
        cont = All_properties.length
      }
    break;

    case "2":
      for (let i = 0; i < All_properties.length; i++) {
      
        alert(
          "IMÓVEL N. " + (i + 1) +
          "\n\nPROPRIETÁRIO: " + All_properties[i].NameOfProp + 
          "\nQUANTIDADE DE QUARTOS: " + All_properties[i].HowManyRoom + 
          "\nQUANTIDADE DE BANHEIROS: " + All_properties[i].HowManyBath + 
          "\nPOSSUI GARAGEM? " + All_properties[i].Garage
        )
      }
      break;

    case "3":
      alert("Obrigado pela visita. Volte sempre!");
    break

    default:
      alert("Opção inválida! Escolha outra opção.")
  }
} while (menu !== "3");
