import BaseController from '../../common/controllers/baseController';
import { BasicClientDto, ClientDto } from './clientesDtos';

class ClientesController extends BaseController {
  constructor(service) {
    super();
    this.service = service;

    this.handleList = this.handleList.bind(this);
    this.handleListBasic = this.handleListBasic.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleOneBasic = this.handleOneBasic.bind(this);
  }

  async handleOne(req, res) {
    const { id } = req.params;

    const client = await this.service.getSingleClient(id);
    const data = new ClientDto(client);

    ClientesController.sendBasicOkResponse({
      res,
      data,
    });
  }

  async handleOneBasic(req, res) {
    const { id } = req.params;

    const client = await this.service.getSingleClient(id);
    const data = new BasicClientDto(client);

    ClientesController.sendBasicOkResponse({
      res,
      data,
    });
  }

  async handleList(req, res) {
    const { limit } = req.query;

    const clientes = await this.service.getClientsList({ limit });
    const dtos = clientes.map(client => new ClientDto(client));

    ClientesController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }

  async handleListBasic(req, res) {
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
