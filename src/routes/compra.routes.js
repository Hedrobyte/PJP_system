import express from "express"
import compraController from "../controllers/compra.controllers.js"


const route = express.Router()

route.get("/:id", compraController.formularioCompra)
route.post("/", compraController.realizarCompra)
route.get("/alterar/:id", compraController.buscarCompra)
route.post("/alterar-compra", compraController.alterarCompra)
route.get("/alterar-produto/:id", compraController.alterarProduto)
route.get("/alterar-pd/:id", compraController.alterarProdutoCompra)




export default route