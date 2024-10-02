const quaseArray = { 0: 'Leonardo', 1: 'Fernanda', 2: 'Julia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Leonardo', 'Fernanda', 'Julia']
console.log(quaseArray.toString(), meuArray)