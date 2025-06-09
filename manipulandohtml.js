function somar(){

  //Obtendo valores dos inputs e convertendo para numeros
  // utilizando o Number
  const numa = Number (document.getElementById ('numa').value);
  const numb = Number (document.getElementById ('numb').value);

  //Mapeando a div na qual sera inserido o resiltado da soma
  const divResultado = document.getElementById ('resultado');

  //Realizando processamento de dados
  const soma = numa + numb;

  //Inserindo o resultado na div
//---------------------------------
  //divResultado.innerText = soma 
//---------------------------------

//Inserindo o resultado na div em forma de tags html
//----------------------------------
  divResultado.innerHTML = `
  <p class=destac>${soma}</p>
    <br><br>
  <h3>Teste de Texto</h3> `
//----------------------------------


}