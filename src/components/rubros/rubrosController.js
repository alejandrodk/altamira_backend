import BaseController from '../../common/controllers/baseController';
import { GetCategoryDto, GetUniqueCategoryDto } from './rubrosDtos';

class RubrosController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleList = async (req, res) => {
    try {
      const categories = await this.service.getCategoriesList();
      const dtos = categories.map(category => new GetCategoryDto(category));

      RubrosController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      RubrosController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };

  handleUniqueList = async (req, res) => {
    try {
      const categories = await this.service.getUniqueCategories();
      const dtos = categories.map(category => new GetUniqueCategoryDto(category));

      RubrosController.sendBasicOkResponse({
        res,
        data: dtos,
      });
    } catch (error) {
      console.error(error);
      RubrosController.sendBasicErrorResponse({
        res,
        reason: error.reason || error,
      });
    }
  };
}

export default RubrosController;
