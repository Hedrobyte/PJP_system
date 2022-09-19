import Sequelize from "sequelize"
import usuarios from "./usuarios.model.js"
import db from "../repository/bd.js"

const enderecos = db.define('endereco', {
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
    allowNull: false,
    constraint: true,
    foreignKey: 'idUsuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})


export default enderecos