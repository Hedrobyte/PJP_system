/*import  express  from "express"
import handlebars from "express-handlebars"

const app = express();

app.use(express.static('view'))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './view');

app.get('/add-pagamento', function(req,res){
    res.render('TelaCadastro')
})
app.listen(8081)*/

import Sequelize from "sequelize"

const sequelize = new Sequelize('pjp_system', 'pedro', 'Comoninj@2', {
    host: 'localhost',
    dialect: 'mysql'
})


export default sequelize


const produtos = sequelize.define('produto', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
})

produtos.sync({force:true})

