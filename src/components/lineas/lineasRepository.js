import { Linea } from '../../common/models';

export default class ProductosRepository {
  async find() {
    return await Linea.findAll();
  }
}
