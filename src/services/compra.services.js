import compraRepository from "../repository/compra.repository.js"


async function realizarCompra(quantidade, preco_compra, produto,usuario,endereco){
    const retorno = await compraRepository.realizarCompra(quantidade, preco_compra, produto,usuario,endereco)
    return retorno
}

async function buscarCompra(id){
    const retorno = await compraRepository.buscarCompra(id)
    return retorno
}

async function trocarProdutoCompra(id_compra, produto){
    const retorno = await compraRepository.trocarProdutoCompra(id_compra, produto)
    return retorno
}

async function alterarCompra(id_compra, quantidade, preco_compra, produto,usuario,endereco){
    const retorno = await compraRepository.alterarCompra(id_compra, quantidade, preco_compra, produto,usuario,endereco)
    return retorno
}

export default{
    realizarCompra,
    buscarCompra,
    trocarProdutoCompra,
    alterarCompra
}