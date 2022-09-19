import compras from "../model/compras.model.js"
import usuarios from "../model/usuarios.model.js"
import enderecos from "../model/enderecos.model.js"
import produtos from "../model/produtos.model.js"

async function realizarCompra(quantidade, preco_compra, produto,usuario,endereco){
    try{
        await compras.create({
            quantidade: quantidade,
            preco: preco_compra,
            idUsuario: usuario.getId(),
            idEndereco: endereco.getId(),
            idProduto: produto.getId(), 
        })
        return true
    }catch(erro){
        console.log(erro)
        return false
    }

}

async function buscarCompra(id){
    try{
        const retorno = await compras.findOne({
            where: {'id': id},
            include: [usuarios,produtos,enderecos]
        })
        if(retorno.produto.visibilidade == false){
            return false
        }
        else{
            return retorno
        }
    }catch(erro){
        console.log(erro)
    }
}

async function trocarProdutoCompra(id_compra, produto){
    try{
        var retorno = await compras.findOne({
            where: {'id': id_compra},
            include: [usuarios,produtos,enderecos]
        })
        if (retorno == null){
            return false
        }
        else{
            retorno.produto.nome = produto.nome
            retorno.produto.preco = produto.preco
            retorno.idProduto = produto.id
        
            return retorno
        }
    }catch(erro){
        console.log(erro)
    }

}


async function alterarCompra(id_compra, quantidade, preco_compra, produto,usuario,endereco){
    try{
        let compra = await compras.findOne({
            where: {'id': id_compra}
        })
        compra.quantidade = quantidade
        compra.preco = preco_compra
        compra.idProduto = produto.getId()
        compra.idUsuario = usuario.getId()
        compra.endereco = endereco.getId()

        await compra.save()
        return true
    }catch(erro){
        console.log(erro)
        return false
    }
}


export default{
    realizarCompra,
    buscarCompra,
    trocarProdutoCompra,
    alterarCompra
}