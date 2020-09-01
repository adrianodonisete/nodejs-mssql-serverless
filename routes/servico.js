const express = require('express');
const router = express.Router();

const servicosController = require('../controllers/servicosController');


// http://localhost:3000/servicos/teste
router.get('/teste', servicosController.teste);

// http://localhost:3000/servicos/list
router.get('/list', servicosController.list);


router.get('/as', async (req, res, next) => {
  res.status(200).json(['Hello World!']);
});

router.get('/prod', async (req, res, next) => {
  const product = [1,2,3,4, 'Hello World!'];
  res.status(201).json(product);
});

module.exports = router;