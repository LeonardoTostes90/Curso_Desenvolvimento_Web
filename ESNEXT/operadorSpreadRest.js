// OPERADOR... REST (JUNTAR) e SPREAD (ESPALHAR)
// USAR REST COM PARÂMETRO DE FUNÇÃO

// USAR SPREAD COM OBJETO
const funcionario = { nome: 'Fernanda', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


// USAR SPREAD COM ARRAY
const grupoA = ['Leonardo', 'Fernanda', 'Julia']
const grupoFinal = ['Sheila', ...grupoA, 'Jorge']
console.log(grupoFinal)