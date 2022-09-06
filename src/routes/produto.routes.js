import express from "express"
import produtoController from "../controllers/produto.controllers.js"

const route = express.Router()

route.get("/", produtoController.admin)
route.get("/cadastrar-produto", produtoController.formularioProduto)
route.post("/cadastrar-produto", produtoController.cadastrarProduto)
route.get("/listar-produto", produtoController.listarProdutos)
route.get("/listar-excluir", produtoController.listarProdutosExcluir)
route.get("/listar-alterar", produtoController.listarProdutosAlterar)
route.get("/excluir-produto/:id", produtoController.excluirProduto)
route.get("/editar-produto/:id", produtoController.procurarProdutoeditar)
route.post("/editar-produto/", produtoController.editarProduto)


export default route