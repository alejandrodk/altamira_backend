/* eslint-disable new-cap */
import express from 'express';
import LineasController from './lineasController';
import LineasRepository from './lineasRepository';
import LineasService from './lineasService';

const router = express.Router();

class LineasApi {
  constructor() {
    this.repository = new LineasRepository();
    this.service = new LineasService(this.repository);
    this.controller = new LineasController(this.service);
  }

  init = () => {
    router.get('/', this.controller.handleList);
    return router;
  };
}

export default LineasApi;
