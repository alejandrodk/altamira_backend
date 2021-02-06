import { CreateCartProductDto } from './tiendaDtos';
import { getArticleQuantity } from './tiendaHelpers';

export default class TiendaService {
  constructor(repository) {
    this.repository = repository;
  }

  getCartList = async () => {
    return await this.repository.getCarts();
  };

  createClientCart = async data => {
    const { cliente, descuento } = data;
    return await this.repository.createCart({ cliente, descuento });
  };

  getClientCart = async cliente => {
    return await this.repository.getClientCart(cliente);
  };

  updateClientCart = async data => {
    const { cliente, ...carrito } = data;
    return await this.repository.updateCart({ cliente, carrito });
  };

  updateCartArticle = async (cliente, articulo, cantidad) => {
    const { codigo, unidad_min_vta: minVta } = articulo;

    const carrito = await this.repository.getClientCart(cliente);
    const { articulos } = carrito;

    const existArticle =
      articulos.length && articulos?.find(({ codigo: c }) => c === codigo);

    existArticle ?
      (carrito.articulos = articulos.map(art => {
        if (art.codigo === codigo) {
          art.cantidad = getArticleQuantity(cantidad, minVta);
        }
        return art;
      })) :
      (carrito.articulos = [
        ...articulos,
        new CreateCartProductDto(articulo, cantidad),
      ]);

    return await this.repository.updateCart(cliente, carrito);
  };

  removeArticleFromCart = async (cliente, articulo) => {
    const carrito = await this.repository.getClientCart(cliente);

    carrito.articulos = carrito.articulos.filter(({ codigo }) => codigo !== articulo);

    return this.repository.updateCart(cliente, carrito);
  };

  getArticlesByStock = async cliente => {
    const carrito = await this.repository.getClientCart(cliente);

    return carrito.articulos.reduce(
        (acc, articulo) => {
          const { stock, cantidad, unidad_min_vta: minVta } = articulo;

          if (stock > cantidad + minVta) {
            acc.inStock = [...acc.inStock, articulo];
          }
          if (stock === cantidad || stock < cantidad + minVta) {
            acc.critics = [...acc.critics, articulo];
          }
          if (stock < cantidad) {
            acc.outStock = [...acc.outStock, articulo];
          }
          return acc;
        },
        {
          inStock: [],
          outStock: [],
          critics: [],
        },
    );
  };
}
