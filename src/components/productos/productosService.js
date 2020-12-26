import { Op } from 'sequelize';
import { Especialidad, Rubro } from '../../common/models';
import { ProductsCatalogLimit, ProductsCatalogOrder } from './productos.enums';
import {
  calculateOffset,
  getArrayFromFilter,
  getFiltersFromString,
  normalizeFilters,
} from './productos.helpers';

export default class ProductosService {
  constructor(repository) {
    this.repository = repository;
    this.getSingleProduct = this.getSingleProduct.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.getFilteredProducts = this.getFilteredProducts.bind(this);
  }

  async getSingleProduct(id) {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      console.error(error);
    }
  }

  async getProductsList() {
    try {
      return await this.repository.find();
    } catch (error) {
      console.error(error);
    }
  }

  async getFilteredProducts({ filter, page }) {
    filter = getFiltersFromString(filter);

    try {
      if (Array.isArray(filter)) {
        const filters = normalizeFilters(filter);
        const { nuevos, destacados, lineas, rubros, especialidades, busquedas } = filters;

        const filtersArray = [];

        if (nuevos) filtersArray.push({ nuevo: 1 });

        if (destacados) filtersArray.push({ destacado: 1 });

        if (lineas?.length > 0) {
          const values = getArrayFromFilter(lineas);
          const _filters = values.map(name => ({ linea_id: name }));
          filtersArray.push({ [Op.or]: _filters });
        }

        if (rubros?.length > 0) {
          const values = getArrayFromFilter(rubros);
          const rubrosWhere = values.map(category => ({ nombre: category }));

          const _rubros = await Rubro.findAll({
            where: { [Op.or]: rubrosWhere },
            attributes: ['id'],
          });
          const _filters = _rubros.map(({ id }) => ({ rubro_id: id }));
          filtersArray.push({ [Op.or]: _filters });
        }

        if (especialidades?.length > 0) {
          const values = getArrayFromFilter(especialidades);
          const especialidadesWhere = values.map(item => ({ nombre: item }));

          const result = await Especialidad.findAll({
            where: { [Op.or]: especialidadesWhere },
            attributes: ['id'],
          });

          const filtros = result.map(({ id }) => ({ rubro_id: id }));
          filtersArray.push({ [Op.or]: filtros });
        }

        if (busquedas?.length > 0) {
          const values = getArrayFromFilter(busquedas);
          const filtros = values.reduce((acc, curr) => {
            const items = curr?.trim().split(' ');
            const arraySearchFilters = items?.map(keyword => ({
              [Op.or]: [
                { codigo: { [Op.like]: '%' + keyword + '%' } },
                { oem: { [Op.like]: '%' + keyword + '%' } },
                { modelos: { [Op.like]: '%' + keyword + '%' } },
                { descripcion: { [Op.like]: '%' + keyword + '%' } },
                { caracteristicas: { [Op.like]: '%' + keyword + '%' } },
              ],
            }));
            return [...acc, ...arraySearchFilters];
          }, []);

          filtersArray.push(filtros);
        }

        const where = {
          estado: 1,
          [Op.and]: filtersArray,
        };

        const _page = page ?? 0;
        const offset = calculateOffset(_page, ProductsCatalogLimit);

        return await this.repository.getProductsByConditions({
          where,
          options: {
            order: ProductsCatalogOrder,
            limit: ProductsCatalogLimit,
            offset,
          },
        });
      }

      return await this.repository.getProductsByFilter({
        filter,
        properties: ['codigo', 'oem'],
      });
    } catch (error) {
      console.error(error);
    }
  }
}
