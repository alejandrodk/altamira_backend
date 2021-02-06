import { Especialidad } from '../../common/models';

export default class EspecialidadesRepository {
  async find({ attributes } = {}) {
    return await Especialidad.findAll({
      attributes,
    });
  }
}
