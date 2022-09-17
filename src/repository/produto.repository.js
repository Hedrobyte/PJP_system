//import Sequelize from "sequelize"
import produtos from "../model/produtos.model.js"


async function cadastrarProduto(produto){
    
    try{
            await produtos.create({
            nome: produto.getNome(),
            categoria: produto.getCategoria(),
            preco: produto.getPreco(),
            visibilidade: produto.getVisibilidade(),
        })

        return "Produto cadastrado com sucesso"
    }catch(erro){
        return "Houve algum erro ao cadastrar o produto"
    }
}


async function listarProdutos(){
    const retorno = produtos.findAll()
    return retorno

}

async function excluirProduto(id){
    try{
        produtos.destroy({
            where: {'id': id}
        })
    }catch(erro){
        console.log(erro)
    }
}


async function procurarProdutoeditar(id){
    var retorno = null
    try{
        retorno = produtos.findOne({
            where: {'id':id}
        })
        return retorno
    }catch(erro){
        console.log(erro)
        retorno = null
        return retorno
    }
}

async function editarProduto(produto){
    try{
        var pd = await produtos.findOne({
            where: {'id':produto.getId()}
        })
        pd.nome = produto.getNome()
        pd.categoria = produto.getCategoria()
        pd.preco = produto.getPreco()
        await pd.save()
        return "Produto alterado com sucesso"
    }catch(erro){
        console.log(erro)
        return "Houve um erro ao alterar o produto"
    }

}

export default{
    cadastrarProduto,
    listarProdutos,
    excluirProduto,
    procurarProdutoeditar,
    editarProduto
}