const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Fernanda', 'Leonardo', 'Julia', 'Sheila'])
}).then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)