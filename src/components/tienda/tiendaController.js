import BaseController from '../../common/controllers/baseController';
import { GetCartDto } from './tiendaDtos';

class TiendaController extends BaseController {
  constructor(service) {
    super();
    this.service = service;

    this.handleOne = this.handleOne.bind(this);
    this.createOne = this.createOne.bind(this);
    this.updateOne = this.updateOne.bind(this);
  }

  async handleOne(req, res) {
    const { cliente } = req.params;

    const cart = await this.service.getClientCart(cliente);
    const dto = new GetCartDto(cart);

    TiendaController.sendBasicOkResponse({
      res,
      data: dto,
    });
  }

  async createOne(req, res) {
    const data = req.body;
    const result = await this.service.createClientCart(data);

    TiendaController.sendBasicOkResponse({
      res,
      data: result,
    });
  }

  async updateOne(req, res) {
    const { cliente } = req.params;
    const { articulo, cantidad } = req.body;
    const result =
      req.httpMethod === 'PUT' ?
        this.service.addArticleToCart(cliente, articulo, cantidad) :
        this.service.removeArticleFromCart(cliente, articulo, cantidad);

    TiendaController.sendBasicOkResponse({
      res,
      data: result,
    });
  }
}

export default TiendaController;
