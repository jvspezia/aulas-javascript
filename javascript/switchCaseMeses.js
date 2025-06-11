function Verificar(){

const inputMes = document.getElementById('mes')

const mes = Number(inputMes.value)

switch(mes){

  case 1:
    alert(`Mês de Janeiro`)
    break;

  case 2:
    alert(`Mês de Fevereiro`)
    break;

  case 3:
    alert(`Mês de Março`)
    break;

  case 4:
    alert(`Mês de Abril`)
    break;

  case 5:
    alert(`Mês de Maio`)
    break;

  case 6:
    alert(`Mês de Junho`)
    break;

  case 7:
    alert(`Mês de Julho`)
    break;

  case 8:
    alert(`Mês de Agostoso`)
    break;

  case 9:
    alert(`Mês de Setembro`)
    break;

  case 10:
    alert(`Mês de Outubro`)
    break;

  case 11:
    alert(`Mês de Novembro`)
    break;

  case 12:
    alert(`Mês de Dezembro`)
    break;

  case 13:
    alert(`13 Não o arrombado!`)
    break;
  
    default:
      alert(`Numero invalido`)
break;
}

}