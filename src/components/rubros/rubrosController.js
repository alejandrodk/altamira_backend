import BaseController from '../../common/controllers/baseController';
import { GetCategoryDto, GetUniqueCategoryDto } from './rubrosDtos';

class RubrosController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleList = async (req, res) => {
    const categories = await this.service.getCategoriesList();
    const dtos = categories.map(category => new GetCategoryDto(category));

    RubrosController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  };

  handleUniqueList = async (req, res) => {
    const categories = await this.service.getUniqueCategories();
    const dtos = categories.map(category => new GetUniqueCategoryDto(category));

    RubrosController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  };
}

export default RubrosController;
