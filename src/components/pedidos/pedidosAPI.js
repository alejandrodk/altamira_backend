/* eslint-disable new-cap */
import express from 'express';
import PedidosController from './pedidosController';
import PedidosRepository from './pedidosRepository';
import PedidosService from './pedidosService';

const router = express.Router();

class PedidosApi {
  constructor() {
    this.repository = new PedidosRepository();
    this.service = new PedidosService(this.repository);
    this.controller = new PedidosController(this.service);
  }

  init = () => {
    router.get('/', this.controller.handleList);
    router.get('/:id', this.controller.handleOne);
    router.post('/', this.controller.handleCreate);
    router.get('/cliente/:cuenta', this.controller.handleClient);
    router.get('/viajante/:viajante', this.controller.handleSeller);
    return router;
  };
}

export default PedidosApi;
