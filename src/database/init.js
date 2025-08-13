const sqlite3 = require('sqlite3').verbose();

// Tenta fazer a conexão com a base de dados local do SQLite
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Banco de dados conectado com sucesso.');
  }
});

module.exports = db;