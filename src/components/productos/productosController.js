import BaseController from '../../common/controllers/baseController';
import { BasicProductDto, ProductCatalogDto } from './productosDtos';

class ProductosController extends BaseController {
  constructor(service) {
    super();
    this.service = service;
  }

  handleOne = async (req, res) => {
    const { id } = req.params;
    const { complete } = req.query;

    const product = await this.service.getSingleProduct(id);
    const data = complete ? product : new ProductCatalogDto(product);

    ProductosController.sendBasicOkResponse({
      res,
      data,
    });
  };

  handleList = async (req, res) => {
    const { filter, page, complete } = req.query;
    const productos = filter ?
      await this.service.getFilteredProducts({ filter, page }) :
      await this.service.getProductsList();

    const data = complete ?
      productos :
      productos.map(product => new ProductCatalogDto(product));

    ProductosController.sendBasicOkResponse({
      res,
      data,
    });
  };

  handleListBasic = async (req, res) => {
    const productos = await this.service.getProductsList();
    const dtos = productos.map(product => new BasicProductDto(product));

    ProductosController.sendBasicOkResponse({
      res,
      data: dtos,
    });
  };
}

export default ProductosController;
