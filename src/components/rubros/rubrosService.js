import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { RubrosProps } from './rubros.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getCategoriesList = async () => {
    try {
      const categories = await this.repository.find();
      return categories;
    } catch (error) {
      console.error(error);
    }
  };

  getUniqueCategories = async () => {
    try {
      const categories = await this.repository.find();
      return getSingleObjectsByProperty({
        array: categories,
        property: RubrosProps.NOMBRE,
        exclude: ['SIN RUBRO', ''],
      });
    } catch (error) {
      console.error(error);
    }
  };
}
