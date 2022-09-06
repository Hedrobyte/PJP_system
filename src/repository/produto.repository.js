//import Sequelize from "sequelize"
import produtos from "../model/produtos.model.js"


async function cadastrarProduto(produto){
    const resultado = await produtos.create({
        nome: produto.getNome(),
        categoria: produto.getCategoria(),
        preco: produto.getPreco(),
        visibilidade: produto.getVisibilidade(),
    }).then(()=>{
        console.log("Deu certo!!!")
    }).catch((erro)=>{
        console.log(erro)
    })

    if(resultado instanceof produtos){
        return "Cadastro Realizado com sucesso!!"
    }
    else{
        return "Houve um erro ao cadastrar o produto"
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
    var retorno
    try{
        retorno = produtos.findOne({
            where: {'id':id}
        })
        return retorno
    }catch(erro){
        console.log(erro)
    }
}

async function editarProduto(produto){
    try{
        produtos.findOne({
            where: {'id':produto.getId()}
        }).then((pd) =>{
            pd.nome = produto.getNome()
            pd.categoria = produto.getCategoria()
            pd.preco = produto.getPreco()

            pd.save()
        })
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