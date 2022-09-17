import express from "express"
import  bodyParser from "body-parser"
import produtoRoutes from "./routes/produto.routes.js"
import handlebars from "express-handlebars"
import moment from "moment"
import path from "path"
const __dirname = path.resolve()
const app = express();

app.use('/produto',express.static('view'))
app.use('/produto/editar-produto',express.static('view'))

//app.use(express.static('view'))
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', 
    runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
    },
    helpers:{
        formatDate: (date) =>{
            return moment(date).format('DD/MM/YYYY')
    }

    }
}))
app.set('view engine', 'handlebars')
app.set('views', './view');


app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use("/produto", produtoRoutes)

app.listen(8080, ()=> {console.log("servidor Executando!!!")})