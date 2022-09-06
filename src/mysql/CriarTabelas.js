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

produtos.sync({force:true})

