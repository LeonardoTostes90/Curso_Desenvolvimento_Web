class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Analista') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Tostes')
    }
}

const filho = new Filho
console.log(filho)