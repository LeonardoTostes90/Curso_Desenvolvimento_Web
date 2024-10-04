// NÃO ACEITA REPETIÇÃO E NÃO É INDEXADA
const times = new Set()
times.add('Flamengo')
times.add('Vasco').add('Fluminense').add('Botafogo')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Botafogo')
console.log(times.has('Fluminense'))


const nomes = ['Fernanda', 'Leonardo', 'Julia', 'Fernanda']
const nomesSet = new Set(nomes)
console.log(nomesSet)