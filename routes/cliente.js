const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');


// http://localhost:3000/servicos/teste
// router.get('/teste', clientesController.teste);

// http://localhost:3000/servicos/list
router.get('/list', clientesController.list);

// http://localhost:3000/servicos/conn
router.get('/conectar', clientesController.conn);



module.exports = router;