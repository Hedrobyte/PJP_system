import Sequelize from "sequelize"

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

