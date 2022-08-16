const { connect } = require('mongoose');

function mongoDb() {
  connect('mongodb://localhost:27017/animes-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MONGO-DB CONECTADO');
    })
    .catch((err) => {
      console.log('Erro na conexão com o banco: ', err);
    });
}
module.exports = { mongoDb };
