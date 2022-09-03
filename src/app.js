import express from "express";
import  bodyParser from "body-parser"
import produtoRoutes from "./routes/produto.routes.js"
import handlebars from "express-handlebars"

const app = express();

app.use('/produto',express.static('view'))
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))
app.set('view engine', 'handlebars')
app.set('views', './view');


app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use("/produto", produtoRoutes)

app.listen(8080, ()=> {console.log("servidor Executando!!!")})