let valor // Não inicializada
console.log(valor)

valor = null // Ausência de Valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Produto sem Preço
console.log(!!produto.preco)
console.log(produto)