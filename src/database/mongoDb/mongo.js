const { connect } = require('mongoose');

function mongoDb() {
  connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MONGODB Atlas CONECTADO');
    })
    .catch((err) => {
      console.log(`Erro ao conectar com o MongoDB, erro: ${err}`);
    });
}
module.exports = { mongoDb };
