


function addcard() {

//Mapeando div externa
const divBox = document.getElementById('box')
const inputText = document.getElementById('texto')
const inputNumber = Number(document.getElementById('num').value)


//inserindo card

for (let contador = 0; contador < inputNumber; contador++){
  divBox.innerHTML += `   
  <div class="card">${inputText.value}</div>
  `
  } 
}
