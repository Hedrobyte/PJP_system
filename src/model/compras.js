class Compras{

    constructor(id ,quantidade,preco){
        this.id = id
        this.quantidade = quantidade
        this.preco = preco
    }

    getId(){
        return this.id
    }
    getQuantidade(){
        return this.quantidade
    }
    getPreco(){
        return this.preco
    }
}

export default Compras