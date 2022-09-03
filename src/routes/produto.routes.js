import express from "express"
import produtoController from "../controllers/produto.controllers.js"

const route = express.Router()

route.get("/cadastrar-produto", produtoController.formularioProduto)
route.post("/cadastrar-produto", produtoController.cadastrarProduto)
route.get("/listar-produto", produtoController.listarProdutos)
route.get("/excluir-produto/:id", produtoController.excluirProduto)

export default route