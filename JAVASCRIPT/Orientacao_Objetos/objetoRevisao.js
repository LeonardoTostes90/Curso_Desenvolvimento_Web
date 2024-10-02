// Coleção dinâmica de pares Chave/Valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genérico'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Leonardo',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Fernanda',
        idade: 35
    }, {
        nome: 'Julia',
        idade: 7
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida 1'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)