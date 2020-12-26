/* eslint-disable new-cap */
import express from 'express';
import ProductosController from './productosController';
import ProductosRepository from './productosRepository';
import ProductosService from './productosService';

const router = express.Router();

class ProductosApi {
  constructor() {
    this.repository = new ProductosRepository();
    this.service = new ProductosService(this.repository);
    this.controller = new ProductosController(this.service);

    this.init = this.init.bind(this);
  }

  init() {
    router.get('/', this.controller.handleList);
    router.get('/basic', this.controller.handleListBasic);
    router.get('/:id', this.controller.handleOne);
    return router;
  }
}

export default ProductosApi;
