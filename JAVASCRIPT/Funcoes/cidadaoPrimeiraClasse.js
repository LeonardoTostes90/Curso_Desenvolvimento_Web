// Função em JS é FIRST-CLASS OBJETC (Citizens)
// Higher-Order Function

// Criar funcão de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar Função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })


// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// OU...
const cincoMais = soma(2, 3)
cincoMais(4)