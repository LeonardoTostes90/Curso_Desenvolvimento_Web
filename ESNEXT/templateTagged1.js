// TAGGED TEMPLATE - PROCESSO O TEMPLATE DENTRO DE UMA FUNÇÃO
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Julia'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)