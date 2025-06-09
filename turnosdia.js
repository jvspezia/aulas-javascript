function Verificar(){

  const Inputhora = document.getElementById ('hora')

  const hora = Number(Inputhora.value)

  if( hora > 6 &&  hora<=14 ){

    alert(`
      Primeiro turno caralho
      `)
      }

  else if ( hora > 14 &&  hora<=22 ){ 
    alert(`
          Segundo turno caralho
      `)}
      else{
         alert(`
          Horario invalido
      `)
      }
}