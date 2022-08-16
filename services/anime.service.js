const Anime = require('../database/models/animeSchema');
const animes = require('../mocks/animes');
const AnimeEntity = require('../entities/anime.entity');
const CharacterEntity = require('../entities/character.entity');
//
async function buscarAllAnimesService(anime) {
  return await Anime.find();
}
//
async function buscarAnimeByIdService(id) {
  const buscarAnime = await Anime.findOne({ id: id });
  return buscarAnime;
}
//
async function criarAnimeService(anime) {
  // const novoId = animes.length;
  // anime.id = novoId;
  const novoAnime = new AnimeEntity(anime);
  novoAnime.validate();

  if (!anime.characters) {
    throw new Error('Personagens precisa ser informado');
  }

  const novoCharacters = [];

  anime.characters.map((character) => {
    const novoCharacter = new CharacterEntity(character);
    novoCharacter.validate();
    novoCharacters.push(novoCharacter.getCharacter());
  });
  const novoAnimeValidado = {
    ...novoAnime.getAnime(),
    characters: novoCharacters,
  };

  const animeCriado = await Anime.create(novoAnimeValidado);

  return animeCriado;
}
//
async function atualizarAnimeService(anime) {
  const atualizarAnime = new AnimeEntity(anime);
  atualizarAnime.validate();

  if (!anime.characters) {
    throw new Error('Personagem precisa ser informado');
  }

  const charactersAtualizado = [];

  anime.characters.map((character) => {
    const characterAtualizado = new CharacterEntity(character);
    characterAtualizado.validate();
    charactersAtualizado.push(characterAtualizado.getCharacter());
  });

  const animeAtualizado = {
    ...atualizarAnime.getAnime(),
    characters: charactersAtualizado,
  };

  const animeAtualizadoInDatabase = await Anime.findOneAndUpdate(
    { id: anime.id },
    animeAtualizado,
    {
      new: true,
    },
  );
  return animeAtualizadoInDatabase;
}
//
async function deletarAnimeService(id) {
  let buscarAnime = await Anime.findOneAndDelete({ id: id });
  return buscarAnime;
}
module.exports = {
  buscarAllAnimesService,
  buscarAnimeByIdService,
  criarAnimeService,
  atualizarAnimeService,
  deletarAnimeService,
};
