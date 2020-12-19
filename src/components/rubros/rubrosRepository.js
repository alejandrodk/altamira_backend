import { Rubro } from '../../common/models';

export default class ProductosRepository {
  constructor() {
    this.find = this.find.bind(this);
  }

  async find({
    attributes,
  } = {}) {
    return await Rubro.findAll({
      attributes,
    });
  }
}
