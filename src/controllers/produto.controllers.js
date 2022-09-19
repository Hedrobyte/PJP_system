import produtoServices from "../services/produto.services.js"
import Produto from "../model/produto.js"


async function admin(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        res.render('tela_de_administracao')
    }
    else{
        res.redirect('/usuario/principal')
    }
}

async function formularioProduto(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        res.render('TelaCadastro')
    }
    else{
        res.redirect('/usuario/principal')
    }

}

async function cadastrarProduto(req, res){
    const novo = req.body
    const produto = new Produto(null, novo.nome, novo.categoria, novo.preco, true)

    const retorno = await produtoServices.cadastrarProduto(produto)
    //console.log(retorno)
    res.render('resultado', {retorno: retorno})

}

async function listarProdutos(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        const retorno = await produtoServices.listarProdutos()
        res.render('listarProdutos', {retorno: retorno})
    }
    else{
        res.redirect('/usuario/principal')
    }
}

async function listarProdutosExcluir(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        const retorno = await produtoServices.listarProdutos()
        res.render('TelaExclusao', {retorno: retorno})
    }
    else{
        res.redirect('/usuario/principal')
    }
}

async function listarProdutosAlterar(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        const retorno = await produtoServices.listarProdutos()
        res.render('AlterarProduto', {retorno: retorno})
    }
    else{
        res.redirect('/usuario/principal')
    }

}

async function excluirProduto(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        const id = req.params.id
        await produtoServices.excluirProduto(id)
        res.redirect('/produto')
    }
    else{
        res.redirect('/usuario/principal')
    }

}

async function procurarProdutoeditar(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if (email_admin && id == null){
        const id = req.params.id
        const retorno = await produtoServices.procurarProdutoeditar(id)
        if (retorno != null){
            res.render('editarProduto', {retorno: retorno})
        }
        else{
            res.redirect('/produto/listar-produto')
        }
    }
    else{
        res.redirect('/usuario/principal')
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