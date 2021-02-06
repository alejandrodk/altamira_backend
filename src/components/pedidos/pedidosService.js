import { add } from 'date-fns';
import { getDBFormatDate } from '../../common/helpers/normalizer';

export default class PedidosService {
  constructor(repository) {
    this.repository = repository;
  }

  async createNewOrder(data) {
    return await this.repository.createOne(data);
  }

  async getSingleOrder(id) {
    return await this.repository.findById(id);
  }

  async getOrdersList(limit) {
    limit && (limit = parseInt(limit));
    return await this.repository.find(limit);
  }

  async getClientOrders(client, limit) {
    limit && (limit = parseInt(limit));
    return await this.repository.findByClient({ client, limit });
  }

  async getOrdersByFilters({ date, client, status, limit }) {
    date && (date = getDBFormatDate(date));
    limit && (limit = parseInt(limit));

    const initialDate = date;
    const finalDate = date && add(date, { hours: 23, minutes: 59 });

    return await this.repository.findByFilters({
      client,
      initialDate,
      finalDate,
      status,
      limit,
    });
  }

  async getOrdersBySeller(seller, limit) {
    limit && (limit = parseInt(limit));
    return await this.repository.findBySeller({ seller, limit });
  }
}
