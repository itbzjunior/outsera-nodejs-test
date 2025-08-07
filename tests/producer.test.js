const request = require('supertest');
const app = require('../src/app');

describe('GET /producers/interval-awards', () => {

  it('deve retornar produtores com os parametros "min" e "max" corretamente', async () => {
    
    // Faz a chamada
    const res = await request(app).get('/producers/interval-awards');

    // Espera que o resultado tenta os parâmetros "min" e "max" no body
    expect(res.body).toHaveProperty('min');
    expect(res.body).toHaveProperty('max');

    // Espera que os parâmetros "min" e "max" sejam uma array
    expect(Array.isArray(res.body.min)).toBe(true);
    expect(Array.isArray(res.body.max)).toBe(true);
  });

  it('deve retornar os produtores de acordo com os dados enviados no CSV do teste', async () => {
    
    // Faz a chamada
    const res = await request(app).get('/producers/interval-awards');

    // Verificação dos dados esperados no "min"
    expect(res.body.min[0]).toEqual({
      producer: 'Joel Silver',
      interval: 1,
      previousWin: 1990,
      followingWin: 1991
    });

    // Verificação dos dados esperados no "max"
    expect(res.body.max[0]).toEqual({
      producer: 'Matthew Vaughn',
      interval: 13,
      previousWin: 2002,
      followingWin: 2015
    });
  });
});