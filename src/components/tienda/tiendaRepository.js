import { Carrito } from '../../common/models';

export default class TiendaRepository {
  async createCart({ cliente, descuento }) {
    return await Carrito.create({ cliente, descuento });
  }

  async getCarts() {
    return await Carrito.find();
  }

  async getClientCart(cliente) {
    return await Carrito.findOne({ cliente });
  }

  async updateCart(cliente, data) {
    return await Carrito.updateOne({ cliente }, data);
  }

  async deteleCart(cliente) {
    return await Carrito.remove({ cliente });
  }
}
