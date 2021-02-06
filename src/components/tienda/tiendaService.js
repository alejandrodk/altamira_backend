import { CreateCartProductDto } from './tiendaDtos';
import { getArticleQuantity } from './tiendaHelpers';

export default class TiendaService {
  constructor(repository) {
    this.repository = repository;

    this.getCartList = this.getCartList.bind(this);
    this.createClientCart = this.createClientCart.bind(this);
    this.getClientCart = this.getClientCart.bind(this);
    this.updateClientCart = this.updateClientCart.bind(this);
    this.updateCartArticle = this.updateCartArticle.bind(this);
    this.removeArticleFromCart = this.removeArticleFromCart.bind(this);
  }

  async getCartList() {
    return await this.repository.getCarts();
  }

  async createClientCart(data) {
    try {
      const { cliente, descuento } = data;
      return await this.repository.createCart({ cliente, descuento });
    } catch (error) {
      console.error(error);
    }
  }

  async getClientCart(cliente) {
    try {
      return await this.repository.getClientCart(cliente);
    } catch (error) {
      console.error(error);
    }
  }

  async updateClientCart(data) {
    try {
      const { cliente, ...carrito } = data;
      return await this.repository.updateCart({ cliente, carrito });
    } catch (error) {
      console.error(error);
    }
  }

  async updateCartArticle(cliente, articulo, cantidad) {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }

  async removeArticleFromCart(cliente, articulo) {
    try {
      const carrito = await this.repository.getClientCart(cliente);

      carrito.articulos = carrito.articulos.filter(({ codigo }) => codigo !== articulo);

      return this.repository.updateCart(cliente, carrito);
    } catch (error) {
      console.error(error);
    }
  }

  async getArticlesByStock(cliente) {
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
  }
}
