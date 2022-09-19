import produtos from "../model/produtos.model.js"
import Produto from "../model/produto.js"
import produtosRepository from "../repository/produto.repository.js"


describe("teste cadastro de produtos ", ()=>{
    test("Cadastrar um produto", async ()=>{
        const produto = new Produto(3,"Carnage", "Computador", 5521.33, true)
        const retorno =  await produtosRepository.cadastrarProduto(produto)
        await expect(retorno).toEqual("Produto cadastrado com sucesso")
    })
})


describe("Procurar produto", ()=>{
    test("procurar um produto que não exite", async ()=>{
        const retorno =  await produtosRepository.procurarProdutoeditar(3)
        await expect(retorno).toBeNull()
    })
})

describe("Procurar produto", ()=>{
    test("procurar um produto que exite", async ()=>{
        const retorno =  await produtosRepository.procurarProdutoeditar(1)
        await expect(retorno).toBeInstanceOf(produtos)
    })
})


