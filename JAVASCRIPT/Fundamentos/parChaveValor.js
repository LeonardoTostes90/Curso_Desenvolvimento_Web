// par CHAVE / VALOR
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Fala parceiro'
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Leonardo',
    idade: 33,
    peso: 100,
    endereco: {
        logradouro: 'Rua 1',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)