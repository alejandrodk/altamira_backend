import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { RubrosProps } from './rubros.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getCategoriesList = async () => {
    const categories = await this.repository.find();
    return categories;
  };

  getUniqueCategories = async () => {
    const categories = await this.repository.find();
    return getSingleObjectsByProperty({
      array: categories,
      property: RubrosProps.NOMBRE,
      exclude: ['SIN RUBRO', ''],
    });
  };
}
