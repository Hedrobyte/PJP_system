import produtoServices from "../services/produto.services.js"
import usuarioServices from "../services/usuario.services.js"
import compraServices from "../services/compra.services.js"
import Produto from "../model/produto.js"
import Usuario from "../model/usuario.js"
import Endereco from "../model/endereco.js"

var id_compra = null
var retorno_compra = null


async function formularioCompra(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const id = req.params.id
        const retorno = await produtoServices.procurarProdutoeditar(id)
        if(retorno != null){
            res.render('tela-compra', {retorno: retorno})
        }
    }
    else{
        res.redirect('/produto')
    }
}

async function realizarCompra(req,res){
    const id_produto = req.body.id
    const quantidade = req.body.quantidade
    const rua = req.body.rua
    const numero = req.body.numero
    const ed = await usuarioServices.procurarEndereco(rua,numero)
    if(ed == null){
        req.flash("error_login", "Endereço não cadastrado")
        res.redirect('/compra/'+req.body.id)
    }
    else{
        const endereco = new Endereco(ed.id, ed.rua, ed.numero)
        const pd = await produtoServices.procurarProdutoeditar(id_produto)
        const produto = new Produto(pd.id , pd.nome, pd.categoria, pd.preco, pd.visibilidade)
        const us = await usuarioServices.procurarUsuario(id)
        const usuario = new Usuario(us.id , us.nome, us.email, us.senha)
        const preco_compra = (pd.preco * quantidade)

        const retorno = await compraServices.realizarCompra(quantidade, preco_compra, produto,usuario,endereco)

        if(retorno){
            req.flash("success_login", "Compra realizada com sucesso")
            res.redirect('/usuario/principal')
        }
        else{
            req.flash("error_login", "Houve um erro ao realizar a compra")
            res.redirect('/usuario/principal')
        }
    }
}

async function buscarCompra(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const id = req.params.id
        if(retorno_compra != null){
            const ret = retorno_compra
            retorno_compra = null
            id_compra = null
            res.render('alterar-compra', {retorno: ret})
        }else{
            const retorno = await compraServices.buscarCompra(id)
            if(!retorno){
                req.flash("error_login", "Não é possível alterar essa compra")
                res.redirect('/usuario/lista-compra')
            }
            else{
                res.render('alterar-compra', {retorno: retorno})
            }
        }
    }
    else{
        res.redirect('/produto')
    }
}


async function alterarProduto(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        id_compra = req.params.id
        const retorno = await produtoServices.listarProdutos()
        res.render('tela-troca-produto', {retorno:retorno})
    }
    else{
        res.redirect('/produto')
    }
}

async function alterarProdutoCompra(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const id_produto = req.params.id
        const produto = await produtoServices.procurarProdutoeditar(id_produto)
        if(produto == null){
            res.redirect('/usuario/lista-compra')
        }
        else{
            retorno_compra = await compraServices.trocarProdutoCompra(id_compra, produto)
            if(!retorno_compra || id_compra == null){
                res.redirect('/usuario/lista-compra')
            }
            else{
                await res.redirect('/compra/alterar/'+ id_compra)
            }
        }
    }
    else{
        res.redirect('/produto')
    }

}

async function alterarCompra(req,res){
    const id_compra = req.body.id_compra
    const id_produto = req.body.id_produto
    const quantidade = req.body.quantidade
    const rua = req.body.rua
    const numero = req.body.numero
    const ed = await usuarioServices.procurarEndereco(rua,numero)
    if(ed == null){
        req.flash("error_login", "Endereço não cadastrado")
        res.redirect('/compra/alterar/'+ id_compra)
    }
    else{
        const endereco = new Endereco(ed.id, ed.rua, ed.numero)
        const pd = await produtoServices.procurarProdutoeditar(id_produto)
        const produto = new Produto(pd.id , pd.nome, pd.categoria, pd.preco, pd.visibilidade)
        const us = await usuarioServices.procurarUsuario(id)
        const usuario = new Usuario(us.id , us.nome, us.email, us.senha)
        const preco_compra = (pd.preco * quantidade)
        console.log(rua)

        const retorno = await compraServices.alterarCompra(id_compra, quantidade, preco_compra, produto,usuario,endereco)

        if(retorno){
            req.flash("success_login", "Compra alterada com sucesso")
            res.redirect('/usuario/lista-compra')
        }
        else{
            req.flash("error_login", "Houve um erro ao alterar a compra")
            res.redirect('/usuario/lista-compra')
        }
    }
}


export default{
    formularioCompra,
    realizarCompra,
    buscarCompra,
    alterarProduto,
    alterarProdutoCompra,
    alterarCompra
}