const alunos = [
    { nome: 'Leonardo', nota: 8.3, bolsista: false },
    { nome: 'Fernanda', nota: 9.1, bolsista: true },
    { nome: 'Julia', nota: 9.8, bolsista: false },
    { nome: 'Daniel', nota: 7.6, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))