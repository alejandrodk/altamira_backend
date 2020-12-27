import { CreateCartProductDto } from './tiendaDtos';

export default class TiendaService {
  constructor(repository) {
    this.repository = repository;

    this.createClientCart = this.createClientCart.bind(this);
    this.getClientCart = this.getClientCart.bind(this);
    this.updateClientCart = this.updateClientCart.bind(this);
    this.addArticleToCart = this.addArticleToCart.bind(this);
    this.removeArticleFromCart = this.removeArticleFromCart.bind(this);
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

  async addArticleToCart(cliente, articulo, cantidad) {
    try {
      const { codigo, unidad_min_vta: minVta } = articulo;
      const carrito = await this.repository.getClientCart(cliente);
      const existArticle = carrito.articulos.find({ codigo });

      existArticle ?
        (carrito.articulos = carrito.articulos.map(art => {
          if (art.codigo === codigo) art.cantidad = cantidad || minVta;
          return art;
        })) :
        carrito.articulos.push(new CreateCartProductDto(articulo, cantidad));

      return await this.repository.updateCart(cliente, carrito);
    } catch (error) {
      console.error(error);
    }
  }

  async removeArticleFromCart(cliente, articulo, cantidad) {
    try {
      const { codigo, unidad_min_vta: minVta } = articulo;
      const carrito = await this.repository.getClientCart(cliente);

      carrito.articulos = carrito.articulos
          .map(art => {
            if (art.codigo === codigo) {
              art.cantidad > art.minVta && (art.cantidad -= cantidad || minVta);
              art.cantidad <= art.minVta && (art.cantidad = 0);
            }
            return art;
          })
          .filter(art => art.cantidad);

      return this.repository.updateCart(cliente, carrito);
    } catch (error) {
      console.error(error);
    }
  }
}
