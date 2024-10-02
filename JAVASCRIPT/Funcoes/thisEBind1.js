const pessoa = {
    saudacao: 'Boa tarde!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e Orientação a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()                                                         