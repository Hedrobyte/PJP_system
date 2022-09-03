import produtoServices from "../services/produto.services.js"
import Produto from "../model/produto.js"


async function formularioProduto(req,res){
    res.render('TelaCadastro')
}

async function cadastrarProduto(req, res){
    const novo = req.body
    const produto = new Produto(novo.nome, novo.categoria, novo.preco)

    const retorno = await produtoServices.cadastrarProduto(produto)
    res.render('resultadoCadastroProduto', {retorno: retorno})

}

async function listarProdutos(req,res){
    const retorno = await produtoServices.listarProdutos()
    res.render('listarProdutos', {retorno: retorno})
}

async function excluirProduto(req,res){
    const id = req.params.id
    await produtoServices.excluirProduto(id)
    res.redirect('/produto/listar-produto')
}

export default{
    formularioProduto,
    cadastrarProduto,
    listarProdutos,
    excluirProduto
}