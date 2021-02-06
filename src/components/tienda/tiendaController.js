import BaseController from '../../common/controllers/baseController';
import { GetCartDto } from './tiendaDtos';

class TiendaController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleList = async (req, res) => {
    const data = await this.service.getCartList();
    const dtos = data.map(cart => new GetCartDto(cart));

    TiendaController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  };

  handleOne = async (req, res) => {
    const { cliente } = req.params;

    const cart = await this.service.getClientCart(cliente);
    const dto = new GetCartDto(cart);

    TiendaController.sendBasicOkResponse({
      res,
      data: dto,
    });
  };

  createOne = async (req, res) => {
    const data = req.body;
    const result = await this.service.createClientCart(data);

    TiendaController.sendBasicOkResponse({
      res,
      data: result,
    });
  };

  updateOne = async (req, res) => {
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
  };
}

export default TiendaController;
