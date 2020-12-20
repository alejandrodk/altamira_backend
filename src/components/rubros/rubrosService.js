import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { RubrosProps } from './rubros.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.getUniqueCategories = this.getUniqueCategories.bind(this);
  }

  async getCategoriesList() {
    try {
      const categories = await this.repository.find();
      return categories;
    } catch (error) {
      console.error(error);
    }
  }

  async getUniqueCategories() {
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
  }
}
