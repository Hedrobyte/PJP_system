import Sequelize from "sequelize"

const sequelize = new Sequelize('pjp_system', 'pedro', 'Comoninj@2', {
    host: 'localhost',
    dialect: 'mysql'
})


export default sequelize