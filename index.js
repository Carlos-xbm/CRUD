require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
const router = require('./src/routes/animes.route');
const { mongoDb } = require('./src/database/mongoDb/mongo');
const swaggerRoute = require('./swagger/swagger.route');

app.use(cors());
app.use(express.json());

mongoDb();

app.use('/animes', router);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
