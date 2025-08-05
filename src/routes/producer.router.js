const express = require('express');
const ProducerController = require('../controllers/producer.controller');

const producerRouter = express.Router();
const controller = new ProducerController();

// Rota principal
producerRouter.get('/',(req, res) => {
  res.json('API do teste back-end Outsera do Golden Raspberry Awards, desenvolvido por Itamar Bezerra Junior')
})

// Rota /interval-awards
producerRouter.get('/interval-awards', (req, res) => {
  controller.getIntervalAwards(req, res);
});

module.exports = producerRouter;