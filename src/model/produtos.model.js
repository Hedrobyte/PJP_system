import Sequelize from "sequelize"
import db from "../repository/bd.js"


const produtos = db.define('produto', {
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
    quantidade:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    preco:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
})

export default produtos