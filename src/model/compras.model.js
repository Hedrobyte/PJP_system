import Sequelize from "sequelize"
import usuarios from "./usuarios.model.js"
import produtos from "./produtos.model.js"
import enderecos from "./enderecos.model.js"
import db from "../repository/bd.js"

const compras = db.define('compra', {
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
    allowNull: false,
    constraint: true,
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
compras.belongsTo(enderecos,{
    allowNull: false,
    constraint: true,
    foreignKey: 'idEndereco',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})
compras.belongsTo(produtos,{
    allowNull: false,
    constraint: true,
    foreignKey: 'idProduto',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

export default compras