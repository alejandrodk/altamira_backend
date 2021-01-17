import { Cliente } from '../../common/models';

export default class ClientesRepository {
  constructor() {}

  async findById(cuenta) {
    return await Cliente.findOne({
      where: {
        numero: cuenta,
      },
    });
  }

  async find({ limit } = {}) {
    return await Cliente.findAll({
      order: ['numero'],
      limit: parseInt(limit),
    });
  }
}
