import express from "express";
import  bodyParser from "body-parser"
import produtoRoutes from "./routes/produto.routes.js"

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use("/produto", produtoRoutes)
app.listen(8080, ()=> {console.log("servidor Executando!!!")})


/*produtos.create({
    nome: "Ghost",
    categoria: "Computador",
    quantidade: 3,
    preco: 4500.00
})*/
