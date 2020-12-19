import BaseController from '../../common/controllers/baseController';
import { GetBrandDto } from './lineasDtos';

class LineasController extends BaseController {
  constructor(service) {
    super();
    this.service = service;

    this.handleList = this.handleList.bind(this);
  }

  async handleList(req, res) {
    const brands = await this.service.getBrandsList();
    const dtos = brands.map(brand => new GetBrandDto(brand));

    LineasController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }
}

export default LineasController;
