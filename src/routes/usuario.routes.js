import express from "express"
import usuarioController from "../controllers/usuario.controllers.js"

const route = express.Router()

route.get("/login", usuarioController.formularioLogin)
route.post("/login", usuarioController.realizarLogin)
route.get("/informacao-conta", usuarioController.buscarInformacaoConta)
route.get("/cadastrar-endereco", usuarioController.cadastrarEndereco)
route.post("/cadastrar-endereco", usuarioController.realizarCadastroEndereco)
route.get("/excluir-endereco/:id", usuarioController.excluirEndereco)
route.get("/principal", usuarioController.telaPrincipal)
route.get("/lista-compra", usuarioController.listaCompra)
route.get("/excluir/:id", usuarioController.excluirCompra)




export default route