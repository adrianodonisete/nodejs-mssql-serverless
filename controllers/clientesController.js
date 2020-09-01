const clientesModel = require('../model/clientesModel');

module.exports.list = async (req, res) => {
    const clientes = await clientesModel.all();
    res.status(201).json({clientes});
};

module.exports.conn = async (req, res) => {   
    const clientes = await clientesModel.connTest();
    res.status(201).json({clientes});
};