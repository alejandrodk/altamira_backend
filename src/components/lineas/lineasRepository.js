import { Linea } from '../../common/models';

export default class ProductosRepository {
  constructor() {
    this.find = this.find.bind(this);
  }

  async find() {
    return await Linea.findAll();
  }
}
