const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // REMOVE O ÚLTIMO ELEMENTO DO ARRAY
console.log(pilotos)


pilotos.push('Verstappen') // ADICIONA UM ELEMENTO NA ÚLTIMA POSIÇÃO DO ARRAY
console.log(pilotos)

pilotos.shift() // REMOVE O PRIMEIRO ELEMENTO DO ARRAY
console.log(pilotos)

pilotos.unshift('Hamilton') // ADICIONA UM ELEMENTO NA PRIMEIRA POSIÇÃO DO ARRAY
console.log(pilotos)


// SPLICE pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // NOVO ARRAY
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // NOVO ARRAY
console.log(algunsPilotos2)