class Usuario{

    constructor(id ,nome,email,senha){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    getId(){
        return this.id
    }
    getNome(){
        return this.nome
    }

    getEmail(){
        return this.email
    }
    getSenha(){
        return this.senha
    }
}

export default Usuario