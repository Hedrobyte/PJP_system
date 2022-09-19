class Endereco{

    constructor(id ,rua,numero){
        this.id = id
        this.rua = rua
        this.numero = numero
    }

    getId(){
        return this.id
    }
    getRua(){
        return this.rua
    }

    getNumero(){
        return this.numero
    }
}

export default Endereco