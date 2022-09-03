import Sequelize from "sequelize"
import produtos from "../model/produtos.model.js"


async function cadastrarProduto(produto){
    try{
        produtos.create({
            nome: produto.getnome(),
            categoria: produto.getcategoria(),
            preco: produto.getpreco(),
        })
        return "Cadastro Realizado"
    }catch(erro){
        console.log(erro)
        return "Erro ao cadastrar produto"
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

export default{
    cadastrarProduto,
    listarProdutos,
    excluirProduto
}