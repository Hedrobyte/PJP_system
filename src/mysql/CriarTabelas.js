import Sequelize from "sequelize"
/*import enderecos from "../model/enderecos.model"
import produtos from "../model/produtos.model"*/

const sequelize = new Sequelize('pjp_system', 'pedro', 'Comoninj@2', {
    host: 'localhost',
    dialect: 'mysql'
})


const produtos = sequelize.define('produto', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
    },
    categoria:{
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    preco:{
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
    },
    visibilidade:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
    },
})

/*produtos.sync({force:true})*/


const usuarios = sequelize.define('usuario', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    senha:{
        type: Sequelize.STRING(20),
        allowNull: false,
    },
})

/*const usuario = await usuarios.create({
    nome: 'Pedro S.M',
    email: 'pedrobox10@live.com',
    senha: 'comoninja2',
    })

usuarios.sync({force:true})*/


const enderecos = sequelize.define('endereco', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    rua:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

enderecos.belongsTo(usuarios,{
    constraint: true,
    foreignKey: 'idUsuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

/*await enderecos.create({
    rua: 'Rua Maria Joana',
    numero: 79,
    idUsuario: usuario.id,
    })




enderecos.sync({force:true})*/


const compras = sequelize.define('compra', {
    id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    preco:{
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
    },
})

compras.belongsTo(usuarios,{
    constraint: true,
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
compras.belongsTo(enderecos,{
    constraint: true,
    foreignKey: 'idEndereco',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
compras.belongsTo(produtos,{
    constraint: true,
    foreignKey: 'idProduto',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})


/*compras.sync({force:true})*/





