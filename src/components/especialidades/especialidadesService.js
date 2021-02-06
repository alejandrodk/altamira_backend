import { getSingleObjectsByProperty } from '../../common/helpers/getters';
import { EspecialidadesProps } from './especialidades.enums';

export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getSpecialities = async () => {
    const specialities = await this.repository.find();
    return specialities;
  };

  getUniqueSpecialities = async () => {
    const specialities = await this.repository.find();
    return getSingleObjectsByProperty({
      array: specialities,
      property: EspecialidadesProps.NOMBRE,
    });
  };
}
