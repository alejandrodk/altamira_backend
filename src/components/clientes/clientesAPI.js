/* eslint-disable new-cap */
import express from 'express';
import ClientesController from './clientesController';
import ClientesRepository from './clientesRepository';
import ClientesService from './clientesService';

const router = express.Router();

class ProductosApi {
  constructor() {
    this.repository = new ClientesRepository();
    this.service = new ClientesService(this.repository);
    this.controller = new ClientesController(this.service);

    this.init = this.init.bind(this);
  }

  init() {
    router.get('/', this.controller.handleList);
    router.get('/basic', this.controller.handleListBasic);
    router.get('/:id', this.controller.handleOne);
    router.get('/basic/:id', this.controller.handleOneBasic);
    return router;
  }
}

export default ProductosApi;
