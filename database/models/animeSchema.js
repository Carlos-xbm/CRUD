const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  nationality: { type: String, required: true },
});

const animeSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  protagonist: { type: String, required: true },
  gender: { type: String, required: true },
  year: { type: Number, required: true },
  characters: { type: [characterSchema], required: true },
  createdAd: { type: Date, default: Date.now() },
});

const Anime = model('Anime', animeSchema);

module.exports = Anime;
