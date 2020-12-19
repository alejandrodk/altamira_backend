import { Articulo } from '../../common/models';

export default class ProductosRepository {
  constructor() {
    this.find = this.find.bind(this);
  }

  async find() {
    return await Articulo.findAll({
      limit: 10,
    });
  }
}
