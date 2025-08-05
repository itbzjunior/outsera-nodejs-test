const ProducerService = require('../services/producer.service');

const service = new ProducerService();

class ProducerController {
  async getIntervalAwards(req, res) {
    try {
      const result = await service.getIntervalAwards();
      return res.json(result);
    } catch (error) { 
      return res.status(400).json('Erro ao buscar os produtores vencedores');
    } 
  }
}

module.exports = ProducerController;