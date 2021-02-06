import BaseController from '../../common/controllers/baseController';
import { GetCartDto } from './tiendaDtos';

class TiendaController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleList = async (req, res) => {
    try {
      const data = await this.service.getCartList();
      const dtos = data.map(cart => new GetCartDto(cart));

      TiendaController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      TiendaController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  handleOne = async (req, res) => {
    try {
      const { cliente } = req.params;

      const cart = await this.service.getClientCart(cliente);
      const dto = new GetCartDto(cart);

      TiendaController.sendBasicOkResponse({
        res,
        data: dto,
      });
    } catch (error) {
      console.error(error);
      TiendaController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  createOne = async (req, res) => {
    try {
      const data = req.body;
      const result = await this.service.createClientCart(data);

      TiendaController.sendBasicOkResponse({
        res,
        data: result,
      });
    } catch (error) {
      console.error(error);
      TiendaController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  updateOne = async (req, res) => {
    try {
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
    } catch (error) {
      console.error(error);
      TiendaController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };
}

export default TiendaController;
