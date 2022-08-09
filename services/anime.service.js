const animes = require("../mocks/animes");
const AnimeEntity = require("../entities/anime.entity");
const CharacterEntity = require("../entities/character.entity");

function buscarAllAnimesService() {
    return animes;
}

function buscarAnimeByIdService(id) {
    let buscarAnime;

    animes.map((anime) => {
        if (anime.id == id) {
            buscarAnime = anime;
        }
    });
    return buscarAnime;
}
function criarAnimeService(anime) {
    // const novoId = animes.length;
    // anime.id = novoId;
    const novoAnime = new AnimeEntity(anime);
    novoAnime.validate();

    if (!anime.characters) {
        throw new Error("Personagens precisa ser informado");
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
    animes.push(novoAnimeValidado);
    return novoAnimeValidado;
}

function atualizarAnimeService(anime) {
    const atualizarAnime = new AnimeEntity(anime);
    atualizarAnime.validate();

    if (!anime.characters) {
        throw new Error("Personagem precisa ser informado");
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

    animes.map((eachAnime, index) => {
        if (eachAnime.id == atualizarAnime.id) {
            animes.splice(index, 1, animeAtualizado);
        }
    });
    return animeAtualizado;
}
function deletarAnimeService(id) {
    let buscarAnime;
    console.log("lista: ", animes);
    animes.map((anime, index) => {
        if (anime.id == id) {
            buscarAnime = anime;
            animes.splice(index, 1);
        }
    });
    return buscarAnime;
}
module.exports = {
    buscarAllAnimesService,
    buscarAnimeByIdService,
    criarAnimeService,
    atualizarAnimeService,
    deletarAnimeService,
};
