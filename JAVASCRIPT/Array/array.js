console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Julia', 'Fernanda', 'Leonardo')
console.log(aprovados)

aprovados = ['Julia', 'Fernanda', 'Leonardo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Sheila'
aprovados.push('Jorge')
console.log(aprovados.length)

aprovados[9] = 'Daniel'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)


console.log(aprovados)
aprovados.sort()
console.log(aprovados)


delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Julia', 'Fernanda', 'Leonardo']
aprovados.splice(1, 1) 
console.log(aprovados)


