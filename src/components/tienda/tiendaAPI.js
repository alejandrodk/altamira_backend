/* eslint-disable new-cap */
import express from 'express';
import TiendaController from './tiendaController';
import TiendaRepository from './tiendaRepository';
import TiendaService from './tiendaService';

const router = express.Router();

class TiendaApi {
  constructor() {
    this.repository = new TiendaRepository();
    this.service = new TiendaService(this.repository);
    this.controller = new TiendaController(this.service);

    this.init = this.init.bind(this);
  }

  init() {
    router.get('/', this.controller.handleList);
    router.get('/:cliente', this.controller.handleOne);
    router.post('/', this.controller.createOne);
    router.put('/:cliente', this.controller.updateOne);
    router.delete('/:cliente', this.controller.updateOne);
    return router;
  }
}

export default TiendaApi;
