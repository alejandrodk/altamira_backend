import BaseController from '../../common/controllers/baseController';
import { GetBrandDto } from './lineasDtos';

class LineasController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleList = async (req, res) => {
    try {
      const brands = await this.service.getBrandsList();
      const dtos = brands.map(brand => new GetBrandDto(brand));

      LineasController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      LineasController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };
}

export default LineasController;
