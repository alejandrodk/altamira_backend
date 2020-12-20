/* eslint-disable new-cap */
import express from 'express';
import SpecialitiesController from './especialidadesController';
import SpecialitiesRepository from './especialidadesRepository';
import SpecialitiesService from './especialidadesService';

const router = express.Router();

class SpecialitiesApi {
  constructor() {
    this.repository = new SpecialitiesRepository();
    this.service = new SpecialitiesService(this.repository);
    this.controller = new SpecialitiesController(this.service);

    this.init = this.init.bind(this);
  }

  init() {
    router.get('/', this.controller.handleList);
    router.get('/unique', this.controller.handleUniqueList);

    return router;
  }
}

export default SpecialitiesApi;
