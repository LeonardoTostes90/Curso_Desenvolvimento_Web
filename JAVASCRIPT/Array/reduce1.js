const alunos = [
    { nome: 'Leonardo', nota: 8.3, bolsista: false },
    { nome: 'Fernanda', nota: 9.1, bolsista: true },
    { nome: 'Julia', nota: 9.8, bolsista: false },
    { nome: 'Daniel', nota: 7.6, bolsista: true }
]
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)