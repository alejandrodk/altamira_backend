import BaseController from '../../common/controllers/baseController';
import { BasicClientDto, ClientDto } from './clientesDtos';

class ClientesController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleOne = async (req, res) => {
    try {
      const { id } = req.params;

      const client = await this.service.getSingleClient(id);
      const data = new ClientDto(client);

      ClientesController.sendBasicOkResponse({
        res,
        data,
      });
    } catch (error) {
      console.error(error);
      ClientesController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  handleOneBasic = async (req, res) => {
    try {
      const { id } = req.params;

      const client = await this.service.getSingleClient(id);
      const data = new BasicClientDto(client);

      ClientesController.sendBasicOkResponse({
        res,
        data,
      });
    } catch (error) {
      console.error(error);
      ClientesController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  handleList = async (req, res) => {
    try {
      const { limit } = req.query;

      const clientes = await this.service.getClientsList({ limit });
      const dtos = clientes.map(client => new ClientDto(client));

      ClientesController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      ClientesController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  handleListBasic = async (req, res) => {
    try {
      const { limit } = req.query;

      const clientes = await this.service.getClientsList({ limit });
      const dtos = clientes.map(client => new BasicClientDto(client));

      ClientesController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      ClientesController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };
}

export default ClientesController;
