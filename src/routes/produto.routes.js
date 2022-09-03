import express from "express"
import produtoController from "../controllers/produto.controllers.js"

const route = express.Router()

route.post("/", produtoController.cadastrarProduto)


export default route