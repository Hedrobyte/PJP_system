import express from "express"
import path from "path"
import mysql from "mysql"
import  bodyParser from "body-parser"
const __dirname = path.resolve();
//import  bodyParser from "body-parser"
//import clienteRoutes from "./routes/cliente.routes.js"
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
//conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'pedro',
    password: 'Comoninj@2',
    database: 'pjp_system'
})


connection.connect(function(err) {
    if (err) {
      console.error('Erro ao realizar conexão com BD: ' + err.stack);
      return;
    }

});


/*connection.query('SELECT * FROM produtos', function(err, rows, field){
    if(!err){
        console.log("Resultado: ", rows)
    }
    else{
        console.log("Erro ao realizar a consulta")
    }
})*/

app.use(express.static('view'))

app.post("/produto", function(req,res){
    const novo = req.body
    console.log(novo.nome)
    if(novo.nome == undefined){
        console.log("Sem nome")
    }
    let valores = [novo.nome, novo.categoria, novo.quantidade, novo.preco]
    connection.query('INSERT INTO produtos (id, nome, categoria, quantidade, preco) values (null, ?)',[valores])
    res.send("Cadastro realizado")
})


//app.use(express.json())
/*app.get("/", function(req,res){
    res.sendFile(path.join(__dirname ,'view','index.html'))
})*/
//app.use(bodyParser.urlencoded({extended : true}))
//app.use("/cliente", clienteRoutes)
app.listen(8080, ()=> {console.log("servidor Executando!!!")})



