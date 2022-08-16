const express = require('express');
const router = express.Router();

const animesController = require('../controllers/animes.controller');

router.get('/todos-animes', animesController.buscarAllAnimesController);
router.get('/buscar-anime/:id', animesController.buscarAnimeByIdController);
router.post('/criar', animesController.criarAnimeController);
router.put('/atualizar', animesController.atualizarAnimeController);
router.delete('/deletar/:id', animesController.deletarAnimeController);

module.exports = router;
