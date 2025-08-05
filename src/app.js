const express = require('express');
const createTableMovies = require('./database/table');
const producerRouter = require('./routes/producer.router');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear o body das requisições
app.use(express.json());

// Rota principal
app.get('/',(req, res) => {
  res.json('API do teste back-end Outsera do Golden Raspberry Awards, desenvolvido por Itamar Bezerra Junior')
})

// Usa a route "producerRouter"
app.use('/producers', producerRouter);

// Cria as tabelas do banco antes de iniciar o servidor
function startServer() {
  createTableMovies();
  app.listen(port, () => {
    console.log(`App iniciado na URL http://localhost:${port}`)
  })
}

// Inicia o servidor
startServer();

module.exports = app;