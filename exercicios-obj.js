// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

// function objLivro(titulo, paginas, autoria) {
//   return ({
//     titulo, // mesma coisa que titulo: titulo
//     paginas,
//     autoria
//   }) // parenteses para retornar o objeto diretamente
// }

// console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". 
//Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function objLivro(titulo, paginas, autoria) {
    const livro = {titulo, paginas, autoria}
     return (`O Título ${livro.titulo} foi escrito por ${livro.autoria} e tem ${livro.paginas} páginas`)
  }
  console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))
  
  
  // 3) Crie uma função que receba um objeto como o abaixo:
  
  // const pessoa = {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  // }
  
  // Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.
  
  // Exemplo de retorno:
  // {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  //   nomeCompleto: 'Nazaré Tedesco'
  // }
       
  function pessoa(nome, sobrenome){
    const nomeCompleto = nome + sobrenome
     return ({
       nome,
       sobrenome,
       nomeCompleto,
    })
   }
   console.log(pessoa('Nadyédja', 'Luna'))