import BaseController from '../../common/controllers/baseController';

class MainController extends BaseController {
  constructor() {
    super();
  }
  main = (req, res) => {
    MainController.sendBasicOkResponse({
      res,
      data: 'Hello world!!',
    });
  };
}

export default MainController;
