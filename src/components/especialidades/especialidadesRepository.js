import { Especialidad } from '../../common/models';

export default class EspecialidadesRepository {
  constructor() {
    this.find = this.find.bind(this);
  }

  async find({
    attributes,
  } = {}) {
    return await Especialidad.findAll({
      attributes,
    });
  }
}
