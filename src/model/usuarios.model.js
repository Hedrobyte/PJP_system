import Sequelize from "sequelize"
import db from "../repository/bd.js"



const usuarios = db.define('usuario', {
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

export default usuarios