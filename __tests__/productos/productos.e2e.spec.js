/* eslint-disable */
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import App from '../../src/app/app';

const app = express();
const api = new App();

describe('Productos E2E Test', () => {
  beforeEach(() => jest.setTimeout(3000));
  beforeAll(async () => await api.init(app));

  it('Should get an array of products', async () => {
    const url = '/productos';
    const res = await request(app).get(url).expect(200);
    const { data } = JSON.parse(res.text);

    const [product] = data;
    const { caracteristicas, codigo, descripcion } = product;

    expect(product).toMatchObject({
      caracteristicas,
      codigo,
      descripcion
    });
    expect(data.length).toBeGreaterThan(0);
  });
});
