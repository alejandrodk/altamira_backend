import { Carrito } from '../../common/models';

export default class TiendaRepository {
  async createCart({ cliente, descuento }) {
    return await Carrito.create({ cliente, descuento });
  }

  async getClientCart(cliente) {
    return await Carrito.find({ cliente });
  }

  async updateCart(cliente, data) {
    return await Carrito.update({ cliente }, { ...data });
  }

  async deteleCart(cliente) {
    return await Carrito.remove({ cliente });
  }
}
