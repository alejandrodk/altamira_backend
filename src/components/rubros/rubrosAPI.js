/* eslint-disable new-cap */
import express from 'express';
import RubrosController from './rubrosController';
import RubrosRepository from './rubrosRepository';
import RubrosService from './rubrosService';

const router = express.Router();

class RubrosApi {
  constructor() {
    this.repository = new RubrosRepository();
    this.service = new RubrosService(this.repository);
    this.controller = new RubrosController(this.service);
  }

  init = () => {
    router.get('/', this.controller.handleList);
    router.get('/unique', this.controller.handleUniqueList);

    return router;
  };
}

export default RubrosApi;
