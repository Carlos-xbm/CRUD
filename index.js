const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes/animes.route");

app.use(cors());
app.use(express.json());

app.use("/animes", router);

app.listen(3000, () => {
    console.log("A aplicação esta rodando na porta 3000");
    console.log("acesse em: http://localhost:3000");
});
