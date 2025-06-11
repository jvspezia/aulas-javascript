function Verificar(){
  
  const Idade = document.getElementById ('idade')

  const idade = Number (Idade.value)
   const dezoito = (18)
   
  if (idade >= dezoito ) {

    alert(
      `
      Voce é maior de idade pode entrar
      Idade: ${idade}
      `)
      
  }
  else {
     alert(
      `
      Voce é de menor, não pode entrar
      Idade: ${idade}
      `)
  }
}