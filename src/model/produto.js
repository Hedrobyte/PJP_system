class Produto{

    constructor(nome,categoria,quantidade,preco){
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    getnome(){
        return this.nome
    }

    getcategoria(){
        return this.categoria
    }
    getquantidade(){
        return this.quantidade
    }
    getpreco(){
        return this.preco
    }
}

export default Produto