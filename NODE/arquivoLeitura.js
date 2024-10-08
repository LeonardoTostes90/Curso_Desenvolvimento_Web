const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// LEITURA DE ARQUIVO DE FORMA SÍNCRONA
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// LEITURA DE ARQUIVO DE FORMA ASSÍNCRONA
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})