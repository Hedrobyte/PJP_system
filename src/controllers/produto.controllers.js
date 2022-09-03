import produtoServices from "../services/produto.services.js"
import Produto from "../model/produto.js"

async function cadastrarProduto(req, res){
    const novo = req.body

    const produto = new Produto(novo.nome, novo.categoria, novo.quantidade, novo.preco)

    const retorno = await produtoServices.cadastrarProduto(produto)
    res.send(retorno)

}

export default{
    cadastrarProduto
}