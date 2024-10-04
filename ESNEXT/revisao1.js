// LET e CONST
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)


// TEMPLATE STRING
const produto = 'iPad'
console.log(`${produto} é caro!`)


// DESTRUCTURING
const [l, e, ...tras] = 'Leonardo'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Leonardo', idade: 33 }
console.log(idade, nome)