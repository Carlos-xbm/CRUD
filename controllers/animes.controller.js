const animesService = require("../services/anime.service");

function buscarAllAnimesController(req, res) {
    const todosAnimes = animesService.buscarAllAnimesService();
    res.send(todosAnimes);
}

function buscarAnimeByIdController(req, res) {
    const idParam = req.params.id;
    const unicoAnime = animesService.buscarAnimeByIdService(idParam);
    res.send(unicoAnime);
}

function criarAnimeController(req, res) {
    const anime = req.body;
    const animeCriado = animesService.criarAnimeService(anime);
    res.send(animeCriado);
}

function atualizarAnimeController(req, res) {
    const anime = req.body;
    const animeAtualizado = animesService.atualizarAnimeService(anime);
    res.send(animeAtualizado);
}

function deletarAnimeController(req, res) {
    const id = req.params.id;
    const animeDeletado = animesService.deletarAnimeService(id);
    res.send(animeDeletado);
}

module.exports = {
    buscarAllAnimesController,
    buscarAnimeByIdController,
    criarAnimeController,
    atualizarAnimeController,
    deletarAnimeController,
};
