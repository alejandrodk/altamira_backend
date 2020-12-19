import BaseController from '../common/controllers/baseController';

class MainController extends BaseController {
  constructor() {
    super();
    // Bind functions to use BaseController methods
    this.main = this.main.bind(this);
  }
  main(req, res) {
    MainController.sendBasicOkResponse({
      res,
      data: 'Hello world!!',
    });
  }
}

export default MainController;
