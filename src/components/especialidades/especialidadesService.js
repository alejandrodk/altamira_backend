import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { EspecialidadesProps } from './especialidades.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
    this.getSpecialities = this.getSpecialities.bind(this);
    this.getUniqueSpecialities = this.getUniqueSpecialities.bind(this);
  }

  async getSpecialities() {
    try {
      const specialities = await this.repository.find();
      return specialities;
    } catch (error) {
      console.error(error);
    }
  }

  async getUniqueSpecialities() {
    try {
      const specialities = await this.repository.find();
      return getSingleObjectsByProperty({
        array: specialities,
        property: EspecialidadesProps.NOMBRE,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
