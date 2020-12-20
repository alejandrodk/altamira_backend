import { Articulo } from '../../common/models';
import { Op } from 'sequelize';
import { ProductsCatalogLimit, ProductsCatalogOrder } from './productos.enums';

export default class ProductosRepository {
  constructor() {
    this.find = this.find.bind(this);
    this.getProductsByFilter = this.getProductsByFilter.bind(this);
    this.getProductsByConditions = this.getProductsByConditions.bind(this);
  }

  async find({ where, order, limit } = {}) {
    return await Articulo.findAll({
      where,
      order,
      limit,
    });
  }

  async getProductsByFilter({ filter, properties } = {}) {
    const filtersArray = properties?.map(prop => ({
      [prop]: { [Op.like]: `%${filter}%` },
    }));

    return await Articulo.findAll({
      where: {
        estado: 1,
        [Op.or]: filtersArray,
      },
      order: ProductsCatalogOrder,
      limit: ProductsCatalogLimit,
    });
  }

  async getProductsByConditions({ where, options } = {}) {
    return await Articulo.findAll({
      where,
      ...options,
    });
  }
}
