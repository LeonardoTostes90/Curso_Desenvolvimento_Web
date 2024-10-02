// factory é uma função que retorna um objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Leonardo',
        sobrenome: 'Tostes'
    }
}

console.log(criarPessoa())