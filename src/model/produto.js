class Produto{

    constructor(id ,nome,categoria,preco,visibilidade){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
        this.visibilidade = visibilidade
    }

    getId(){
        return this.id
    }
    getNome(){
        return this.nome
    }

    getCategoria(){
        return this.categoria
    }
    getPreco(){
        return this.preco
    }
    getVisibilidade(){
        return this.visibilidade
    }
}

export default Produto