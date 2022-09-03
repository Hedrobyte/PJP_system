class Produto{

    constructor(nome,categoria,preco){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
    }
    getnome(){
        return this.nome
    }

    getcategoria(){
        return this.categoria
    }
    getpreco(){
        return this.preco
    }
}

export default Produto