const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    gulp.src('pastaA/**/*.txt')
    // .pipe(imagePelaMetade())
    // .pipe(imagemEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim)