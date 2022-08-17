const animesService = require('../services/anime.service');

async function buscarAllAnimesController(req, res) {
  try {
    const todosAnimes = await animesService.buscarAllAnimesService();
    res.status(200).send(todosAnimes);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function buscarAnimeByIdController(req, res) {
  const idParam = req.params.id;
  const unicoAnime = await animesService.buscarAnimeByIdService(idParam);
  if (unicoAnime) {
    res.status(200).send(unicoAnime);
  } else {
    res.status(400).send({ message: 'Não exite nenhum anime com esse id' });
  }
}

async function criarAnimeController(req, res) {
  try {
    const anime = req.body;
    const animeCriado = await animesService.criarAnimeService(anime);
    res.status(201).send(animeCriado);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function atualizarAnimeController(req, res) {
  try {
    const anime = req.body;
    const animeAtualizado = await animesService.atualizarAnimeService(anime);
    res.status(200).send(animeAtualizado);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deletarAnimeController(req, res) {
  const id = req.params.id;
  const animeDeletado = await animesService.deletarAnimeService(id);
  if (animeDeletado) {
    res.status(200).send({ message: 'Anime deletado com sucesso' });
  } else {
    res.status(400).send({ message: 'Nenhum anime com esse id foi encontrado' });
  }
}

module.exports = {
  buscarAllAnimesController,
  buscarAnimeByIdController,
  criarAnimeController,
  atualizarAnimeController,
  deletarAnimeController,
};
