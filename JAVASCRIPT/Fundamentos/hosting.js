// HOSTING significa dizer que mesmo a variável sendo declarada após a sua utilização, o JS faz o içamento e joga essa variável pra cima de forma automática.

console.log('a =', a)
var a = 2
console.log('a =', a)


// Quando utilizamos let, o efeito HOSTING não ocorre

console.log('b =', b)
let b = 2
console.log('b =', b)
