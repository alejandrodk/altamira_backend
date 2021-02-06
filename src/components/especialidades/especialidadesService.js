import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { EspecialidadesProps } from './especialidades.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getSpecialities = async () => {
    try {
      const specialities = await this.repository.find();
      return specialities;
    } catch (error) {
      console.error(error);
    }
  }

  getUniqueSpecialities = async () => {
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
