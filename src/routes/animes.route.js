const express = require('express');
const router = express.Router();
const validParams = require('../middlewares/validParams');
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentos = require('../../swagger/swagger.json');

const animesController = require('../controllers/animes.controller');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocumentos));

router.get('/todos-animes', animesController.buscarAllAnimesController);
router.get('/buscar-anime/:id', validParams, animesController.buscarAnimeByIdController);
router.post('/criar', animesController.criarAnimeController);
router.put('/atualizar/:id', animesController.atualizarAnimeController);
router.delete('/deletar/:id', validParams, animesController.deletarAnimeController);

module.exports = router;
