const MovieModel = require("../models/movie.model");

class ProducerService {

  async getIntervalAwards() {

    // Busca os filmes apenas vencedores, passando o primeiro parâmetro como "true"
    const model = new MovieModel();
    const movies = await model.get(true);

    // Objeto para armazenar os produtores vencedores
    const producerWinners = {};
    
    // Para cada filme encontrado
    movies.forEach(movie => {

      // Extraio os nomes dos produtores
      // Como pode ter mais de 1, separo os nomes por "," e a palavra "and",
      // Assim consigo ter uma array para poder contar separadamente mais abaixo
      const producers = movie.producers.split(/,| and /).map(p => p.trim());

      // Para cada produtor encontrado
      producers.forEach(producer => {

        // Caso o produtor vencedor não estiver definido
        if (!producerWinners[producer]) {
          producerWinners[producer] = []; // Adiciona à lista de vencedores
        }

        // Adiciona o ano do filme na lista do produtor
        producerWinners[producer].push(movie.year);
      });
    });

    // Objeto para armazenar os intervalos
    const intervals = [];

    // Para cada produtor vencedor, precisa calcular o intervalo entre os premios
    for (const producer in producerWinners) {

      // Ordenação crescente dos anos
      const wins = producerWinners[producer].sort((a, b) => a - b);

      // Para cada ano encontrado
      for (let i = 1; i < wins.length; i++) {

        const prevYear = wins[i-1];
        const currentYear = wins[i];

        // Incluo na lista de interválos
        intervals.push({
          producer: producer,
          interval: currentYear - prevYear, // Calculo do intervalo do ano atual e o anterior
          previousWin: prevYear,
          followingWin: currentYear
        });
      }
    } 

    // Calculo os intevalos mínimos e máximos
    const minIntervals = Math.min(...intervals.map(i => i.interval));
    const maxIntervals = Math.max(...intervals.map(i => i.interval));

    // Filtra os produtos que tenham vitórias dentro dos intervalos mínimos e máximos
    return {
      min: intervals.filter(i => i.interval === minIntervals),
      max: intervals.filter(i => i.interval === maxIntervals)
    };
  }
}

module.exports = ProducerService;