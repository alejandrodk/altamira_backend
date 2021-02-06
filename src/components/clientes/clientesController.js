import BaseController from '../../common/controllers/baseController';
import { BasicClientDto, ClientDto } from './clientesDtos';

class ClientesController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleOne = async (req, res) => {
    const { id } = req.params;

    const client = await this.service.getSingleClient(id);
    const data = new ClientDto(client);

    ClientesController.sendBasicOkResponse({
      res,
      data,
    });
  }

  handleOneBasic = async (req, res) => {
    const { id } = req.params;

    const client = await this.service.getSingleClient(id);
    const data = new BasicClientDto(client);

    ClientesController.sendBasicOkResponse({
      res,
      data,
    });
  }

  handleList = async (req, res) => {
    const { limit } = req.query;

    const clientes = await this.service.getClientsList({ limit });
    const dtos = clientes.map(client => new ClientDto(client));

    ClientesController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }

  handleListBasic = async (req, res) => {
    const { limit } = req.query;

    const clientes = await this.service.getClientsList({ limit });
    const dtos = clientes.map(client => new BasicClientDto(client));

    ClientesController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }
}

export default ClientesController;
