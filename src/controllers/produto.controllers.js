import produtoServices from "../services/produto.services.js"
import Produto from "../model/produto.js"


async function admin(req,res){
    res.render('tela_de_administracao')
}

async function formularioProduto(req,res){
    res.render('TelaCadastro')
}

async function cadastrarProduto(req, res){
    const novo = req.body
    const produto = new Produto(null, novo.nome, novo.categoria, novo.preco, true)

    const retorno = await produtoServices.cadastrarProduto(produto)
    console.log(retorno)
    res.render('resultado', {retorno: retorno})

}

async function listarProdutos(req,res){
    const retorno = await produtoServices.listarProdutos()
    res.render('listarProdutos', {retorno: retorno})
}

async function listarProdutosExcluir(req,res){
    const retorno = await produtoServices.listarProdutos()
    res.render('TelaExclusao', {retorno: retorno})
}

async function listarProdutosAlterar(req,res){
    const retorno = await produtoServices.listarProdutos()
    res.render('AlterarProduto', {retorno: retorno})
}

async function excluirProduto(req,res){
    const id = req.params.id
    await produtoServices.excluirProduto(id)
    res.redirect('/produto')
}

async function procurarProdutoeditar(req,res){
    const id = req.params.id
    const retorno = await produtoServices.procurarProdutoeditar(id)
    if (retorno != null){
        res.render('editarProduto', {retorno: retorno})
    }
    else{
        res.redirect('/produto/listar-produto')
    }
}


async function editarProduto(req,res){
    const novo = req.body
    const produto = new Produto(novo.id, novo.nome, novo.categoria, novo.preco)
    const retorno = await produtoServices.editarProduto(produto)
    res.render('resultado', {retorno: retorno})

}

export default{
    formularioProduto,
    cadastrarProduto,
    listarProdutos,
    excluirProduto,
    procurarProdutoeditar,
    editarProduto,
    admin,
    listarProdutosExcluir,
    listarProdutosAlterar
}