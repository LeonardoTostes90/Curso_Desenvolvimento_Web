const nome = "Leonardo"

console.log(nome.charAt(4))
console.log(nome.charAt(8)) // Não retornará erro e sim um espaço vazio
console.log(nome.charCodeAt(3))
console.log(nome.indexOf(3))

console.log(nome.substring(1))
console.log(nome.substring(0, 3))

console.log('Leonardo '.concat(nome).concat("!"))
console.log('Leonardo ' + nome + "!")
console.log(nome.replace('e', 'a'))

console.log("Nanda,Julia,Sheila".split(','))