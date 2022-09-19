import usuarioServices from "../services/usuario.services.js"
import Usuario from "../model/usuario.js"
import produtoServices from "../services/produto.services.js"


async function realizarLogin(req,res){
    id = null
    email_admin = false
    const usuario = new Usuario(null, null, req.body.usuario, req.body.senha)
    const retorno = await usuarioServices.realizarLogin(usuario)
    if(retorno == null){
        req.flash("error_login", "Email ou senha invalidos")
        res.redirect('/usuario/login')
    }
    else{
        if(retorno.email == "admin_controle@hotmail.com"){
            email_admin = true
            res.redirect('/produto')
        }
        else{
            id = retorno.id
            res.redirect('/usuario/principal')
        }
    }
}

async function formularioLogin(req,res){
    res.render('tela_login')
}

async function telaPrincipal(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const retorno = await produtoServices.listarProdutos()
        res.render('pagina-principal-logado', {retorno: retorno})
    }
    else{
        res.redirect('/produto')
    }

}

async function listaCompra(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const retorno = await usuarioServices.listaCompra()
        res.render('lista-compra', {retorno: retorno})
    }
    else{
        res.redirect('/produto')
    }

}

async function excluirCompra(req,res){
    if(id == null && !email_admin){
        res.redirect('/usuario/login')
    }
    else if(id != null && !email_admin){
        const id = req.params.id
        const retorno = await usuarioServices.excluirCompra(id)
        if(retorno){
            req.flash("success_login", "Compra excluída com sucesso")
            res.redirect('/usuario/lista-compra')
        }
        else{
            req.flash("error_login", "Não foi possível excluir a compra")
            res.redirect('/usuario/lista-compra')
        }
    }
    else{
        res.redirect('/produto')
    }
}





export default{
    formularioLogin,
    realizarLogin,
    telaPrincipal,
    listaCompra,
    excluirCompra
}
