// ES8: Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


// MELHORIAS NA NOTAÇÃO LITERAL
const nome = 'Fernanda'
const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}

console.log(pessoa.nome, pessoa.ola())


// CLASS
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'LATIDO'
    }
}

console.log(new Cachorro().falar())