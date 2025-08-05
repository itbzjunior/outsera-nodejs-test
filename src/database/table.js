const fs = require('fs');
const csv = require('csv-parser');
const db = require('./init');
const MovieModel = require('../models/movie.model');

// Cria a tabela "movies" no banco de dados
function createTableMovies() {
  db.serialize(() => {
    db.run(`CREATE TABLE movies (
        id integer PRIMARY KEY AUTOINCREMENT,
        title text NOT NULL,
        year integer,
        studios text,
        producers text,
        winner integer
      )`, (err) => {
      if (err) {
        // Tabela já existe, não faz nada
      } else {

        // Instancia a MovieModel
        const movieModel = new MovieModel();
        
        // Tabela criada com sucesso, prossegue para importar os dados do CSV
        // Usa o fs (FileSystem) pra pegar os dados do CSV
        fs.createReadStream('./data/movielist.csv')
          // Converte os dados CSV para array
          .pipe(csv({ separator: ';' }))
          // Para cada linha encontrada, insere no banco
          .on('data', (row) => {

            // Usa a MovieModel para inserir o filme
            movieModel.insert(row);

            // Retorna mensagem no console sobre o sucesso da importação
            //console.log('Filme "'+row.title+'" adicionado ao banco.');
          })
          // Ao finalizar, retorna no console a mensagem de sucesso
          .on('end', () => {
            console.log('CSV processado com sucesso');
          });
      }
    });
  });
}

module.exports = createTableMovies;