import { Op } from 'sequelize';
import { Cliente, Pedido } from '../../common/models';

export default class PedidoRepository {
  async createOne(data) {
    return await Pedido.create(data);
  }

  async find(limit) {
    return await Pedido.findAll({
      limit: limit || null,
      order: [['id', 'DESC']],
    });
  }

  async findById(id) {
    return await Pedido.findOne({
      where: { id },
    });
  }

  async findByClient({ client, limit }) {
    return await Pedido.findAll({
      where: {
        cliente_id: client,
      },
      limit: limit || null,
    });
  }

  async findByFilters({ client, initialDate, finalDate, status, limit }) {
    const where = {};

    client && (where.cliente_id = client);
    status && (where.estado = status);
    initialDate &&
      (where.fecha = {
        [Op.between]: [initialDate, finalDate],
      });

    return await Pedido.findAll({
      where: {
        ...where,
      },
      limit: limit || null,
    });
  }

  async findBySeller({ seller, limit }) {
    return await Pedido.findAll({
      /* include: [
        { model: Cliente, as: 'cliente', attributes: [] },
        { model: Viajantes, as: 'viajante', attributes: [] },
      ], */
      where: {
        viajante_id: seller,
      },
      limit: limit || null,
    });
  }
}
