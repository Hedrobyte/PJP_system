import produtoRepository from "../repository/produto.repository.js"



async function cadastrarProduto(produto){
    const retorno = await produtoRepository.cadastrarProduto(produto)
    return retorno
}


export default{
    cadastrarProduto
}