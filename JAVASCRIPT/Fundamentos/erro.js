function tratarErroELancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final de todo código')
    }
}

const obj = { nome: 'Leonardo' }
imprimirNomeGritado(obj)