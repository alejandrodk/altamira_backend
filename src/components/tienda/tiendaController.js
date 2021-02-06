import BaseController from '../../common/controllers/baseController';
import { GetCartDto } from './tiendaDtos';

class TiendaController extends BaseController {
  constructor(service) {
    super();
    this.service = service;

    this.handleOne = this.handleOne.bind(this);
    this.createOne = this.createOne.bind(this);
    this.updateOne = this.updateOne.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  async handleList(req, res) {
    const data = await this.service.getCartList();
    const dtos = data.map(cart => new GetCartDto(cart));

    TiendaController.sendBasicOkResponse({
      res,
      data: dtos,
    });
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
      req.method === 'PUT' ?
        this.service.updateCartArticle(cliente, articulo, cantidad) :
        this.service.removeArticleFromCart(cliente, articulo);

    TiendaController.sendBasicOkResponse({
      res,
      data: result,
    });
  }
}

export default TiendaController;
