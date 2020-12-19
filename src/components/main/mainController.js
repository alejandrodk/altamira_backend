import BaseController from '../../models/baseController';

class MainController extends BaseController {
  constructor() {
    super();
    // Bind functions to use BaseController methods
    this.errorTest = this.errorTest.bind(this);
  }
  main(req, res) {
    return res.send('Hello world!!');
  }
}

export default MainController;
