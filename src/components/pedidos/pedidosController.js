import BaseController from '../../common/controllers/baseController';
import { OrderCreateDto, OrderClientDto, OrderGetDto } from './pedidosDtos';

export default class PedidosController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleOne = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await this.service.getSingleOrder(id);
      const data = new OrderGetDto(order);

      PedidosController.sendBasicOkResponse({
        res,
        data,
      });
    } catch (error) {
      console.error(error);
      PedidosController.sendBasicErrorResponse({ res, reason: error.reason || error });
    }
  };

  handleCreate = async (req, res) => {
    const order = req.body;

    try {
      const dto = new OrderCreateDto(order);
      const result = await this.service.createNewOrder(dto);
      const data = result && new OrderGetDto(result);

      PedidosController.sendBasicOkResponse({
        res,
        data,
      });
    } catch (error) {
      console.error(error);
      PedidosController.sendBasicErrorResponse({ res, reason: error.reason || error });
    }
  };

  handleList = async (req, res) => {
    try {
      const { limit, client, date, status } = req.query;
      const existFilters = [client, date, status].find(f => f);

      const orders = existFilters ?
        await this.service.getOrdersByFilters({ limit, client, date, status }) :
        await this.service.getOrdersList(limit);
      const dtos = orders.map(order => new OrderGetDto(order));

      PedidosController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      PedidosController.sendBasicErrorResponse({ res, reason: error.reason || error });
    }
  };

  handleClient = async (req, res) => {
    try {
      const { cuenta: client } = req.params;
      const { limit } = req.query;

      const orders = await this.service.getClientOrders(client, limit);
      const dtos = orders.map(order => new OrderClientDto(order));

      PedidosController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      PedidosController.sendBasicErrorResponse({ res, reason: error.reason || error });
    }
  };

  handleSeller = async (req, res) => {
    try {
      const { viajante: seller } = req.params;
      const { limit } = req.query;

      const orders = await this.service.getOrdersBySeller(seller, limit);
      const dtos = orders.map(order => new OrderGetDto(order));

      PedidosController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      PedidosController.sendBasicErrorResponse({ res, reason: error.reason || error });
    }
  };
}
