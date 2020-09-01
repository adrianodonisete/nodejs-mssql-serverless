const { Sequelize, Op, DataTypes } = require('sequelize');
const { config } = require('../config/db');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.server,
    dialect: 'mssql' 
});

const Servicos = sequelize.define("servicos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    servico: DataTypes.TEXT,
    metodo: DataTypes.TEXT,
    tipo: DataTypes.TEXT
}, {
    timestamps: false
});

module.exports.all = async () => {
    try {
        await sequelize.authenticate();

        return await Servicos.findAll({
            where: {
                id: {
                    [Op.or]: [1,2,25]
                }
            }
        })
            .then(rs => rs.map(s => s.dataValues));

    } catch (error) {
        console.error('Query error: ', error);
    }
}

module.exports.connTest = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        sequelize.close();
    }
}