const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('EPA') // ISSO AQUI DEVERIA SER UM ERRO, MAS JS É FRACAMENTE TIPADO, ENTÃO NÃO APRESENTA ERRO E NESSE CASO ELE RETORNA APENAS FALSO.