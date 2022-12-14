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
    visibilidade:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
    },
})

export default produtos