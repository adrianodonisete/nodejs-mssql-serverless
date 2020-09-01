const servicosModel = require('../model/servicosModel');

module.exports.list = async (req, res) => {
    const servicos = await servicosModel.all();
    res.status(201).json({servicos});
};

module.exports.teste = (req, res) => {    
    const product = [1,2,3,4, 'Hello Servicos!'];
    res.status(201).json(product);
};