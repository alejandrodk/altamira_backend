import BaseController from '../../common/controllers/baseController';
import { GetSpeciallityDto, GetUniqueSpeciallityDto } from './especialidadesDtos';

class SpecialitiesController extends BaseController {
  constructor(service) {
    super();
    this.service = service;

    this.handleList = this.handleList.bind(this);
    this.handleUniqueList = this.handleUniqueList.bind(this);
  }

  async handleList(req, res) {
    const specialities = await this.service.getSpecialities();
    const dtos = specialities.map(speciallity => new GetSpeciallityDto(speciallity));

    SpecialitiesController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }

  async handleUniqueList(req, res) {
    const specialities = await this.service.getUniqueSpecialities();
    const dtos = specialities.map(speciallity => new GetUniqueSpeciallityDto(speciallity));

    SpecialitiesController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  }
}

export default SpecialitiesController;
