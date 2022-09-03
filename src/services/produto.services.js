import produtoRepository from "../repository/produto.repository.js"



async function cadastrarProduto(produto){
    const retorno = await produtoRepository.cadastrarProduto(produto)
    return retorno
}


async function listarProdutos(){
    const retorno = await produtoRepository.listarProdutos()
    return retorno

}

async function excluirProduto(id){
    await produtoRepository.excluirProduto(id)
}


export default{
    cadastrarProduto,
    listarProdutos,
    excluirProduto
}