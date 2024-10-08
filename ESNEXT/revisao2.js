// ARROW FUNCTION
const soma = (a, b) => a + b
console.log(soma(2, 3))


// ARROW FUNCTION (THIS)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// PARÂMETRO DEFAULT
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou o texto prioritário')


// OPERADOR REST
function total(...numeros) {
    let total = 0
    numeros.forEach( n => total += n)
    return total
}

console.log(total(2, 3, 4))