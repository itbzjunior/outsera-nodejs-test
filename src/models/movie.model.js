const db = require('../database/init');

class MovieModel {

  /**
   * Busca os registros da tabela
   * 
   * @param {boolean} onlyWinners  Se deve buscar apenas vencedores ou não
   */
  get(onlyWinners = false) {

    // Define a query SQL
    const sql = 'SELECT * FROM movies' + (onlyWinners ? ' WHERE winner = 1' : '');

    // Retorna a promise
    return new Promise((resolve, reject) => {
      db.all(sql, [], (err, rows) => {
        if(err)
          reject(err);
        else
          resolve(rows);
      });
    });
  }

  /**
   * Insere um novo registro na tabela
   * 
   * @param {array} data  Dados a serem inseridos
   */
  insert(data) {

    // Define a query SQL
    const sql = 'INSERT INTO movies (year,title,studios,producers,winner) VALUES (?,?,?,?,?)';

    // Define os valores a serem inseridos
    const values = [
      parseInt(data.year),
      data.title.trim(),
      data.studios.trim(),
      data.producers.trim(),
      (data.winner === 'yes' ? 1 : 0)
    ];

    // Retorna a promise
    return new Promise((resolve, reject) => {
      db.run(sql, values, (err) => (err ? reject(err) : resolve()));
    });
  }
}

module.exports = MovieModel;