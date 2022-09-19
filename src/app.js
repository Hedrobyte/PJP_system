import express from "express"
import  bodyParser from "body-parser"
import produtoRoutes from "./routes/produto.routes.js"
import usuarioRoutes from "./routes/usuario.routes.js"
import compraRoutes from "./routes/compra.routes.js"
import handlebars from "express-handlebars"
import moment from "moment"
import session from "express-session"
import flash from "connect-flash"

const app = express()
global.id = null
global.email_admin = false
//configurações

//sessões
app.use(session({
    secret: 'pjp_system',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

//Middleware
app.use((req , res, next)=>{
    res.locals.success_login = req.flash("success_login")
    res.locals.error_login = req.flash("error_login")
    next()
})


app.use('/usuario',express.static('view'))
app.use('/compra',express.static('view'))
app.use('/compra/alterar',express.static('view'))
app.use('/compra/alterar-produto',express.static('view'))
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
app.use("/usuario", usuarioRoutes)
app.use("/compra", compraRoutes)

app.listen(8080, ()=> {console.log("servidor Executando!!!")})