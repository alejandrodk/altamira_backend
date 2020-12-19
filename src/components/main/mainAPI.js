/* eslint-disable new-cap */
import express from 'express';
import MainController from './mainController';

const router = express.Router();

class MainApi {
  constructor() {
    this.controller = new MainController();
  }

  init() {
    router.get('/', this.controller.main);

    return router;
  }
}

export default MainApi;
