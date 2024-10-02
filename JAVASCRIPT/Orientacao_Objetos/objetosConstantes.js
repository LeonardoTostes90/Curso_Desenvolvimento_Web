const pessoa = { nome: 'Leonardo' }
pessoa.nome = 'Fernanda'
console.log(pessoa)

Object.freeze(pessoa) // CONGELEI O OBJETO PESSOA
pessoa.nome = 'Julia'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Julia Tostes' })
console.log(pessoaConstante)