import Sequelize from "sequelize"
import produtos from "../model/produtos.model.js"


async function cadastrarProduto(produto){
    console.log()
    try{
        produtos.create({
            nome: produto.getnome(),
            categoria: produto.getcategoria(),
            quantidade: produto.getquantidade(),
            preco: produto.getpreco()
        })
        return "Cadastro Realizado"
    }catch(erro){
        console.log(erro)
        return "Erro ao cadastrar produto"
    }
}

export default{
    cadastrarProduto
}