const request = require('supertest');
const app = require('../src/app');

describe('GET /producers/interval-awards', () => {
  it('deve retornar produtores com os parametro "min" e "max" corretamente', async () => {
    
    // Faz a chamada
    const res = await request(app).get('/producers/interval-awards');

    // Espera que o código de resposta seja 200 (OK)
    expect(res.status).toBe(200);

    // Espera que o resultado tenta os parâmetros "min" e "max" no body
    expect(res.body).toHaveProperty('min');
    expect(res.body).toHaveProperty('max');

    // Espera que os parâmetros "min" e "max" sejam uma array
    expect(Array.isArray(res.body.min)).toBe(true);
    expect(Array.isArray(res.body.max)).toBe(true);

    // Verificação dos dados esperados no "min"
    //const minProducer = res.body.min.find(p => p.producer === 'Joel Silver');
    //expect(minProducer).toBeDefined();
    //expect(minProducer.interval).toBe(1);
    //expect(minProducer.previousWin).toBe(1990);
    //expect(minProducer.followingWin).toBe(1991);

    // Verificação dos dados esperados no "max"
    //const maxProducer = res.body.max.find(p => p.producer === 'Matthew Vaughn');
    //expect(maxProducer).toBeDefined();
    //expect(maxProducer.interval).toBe(13);
    //expect(maxProducer.previousWin).toBe(2002);
    //expect(maxProducer.followingWin).toBe(2015);
  });
});