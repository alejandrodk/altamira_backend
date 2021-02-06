/* eslint-disable camelcase */
export class CreateCartProductDto {
  constructor(
      { codigo, unidad_min_vta, stock, precio, descripcion, caracteristicas } = {},
      cantidad,
  ) {
    this.codigo = codigo;
    this.cantidad = cantidad || unidad_min_vta;
    this.minVta = unidad_min_vta;
    this.stock = stock;
    this.precio = precio;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
  }
}

export class GetCartDto {
  constructor({ cliente, articulos, descuento, total } = {}) {
    this.cliente = cliente;
    this.articulos = articulos;
    this.descuento = descuento;
    this.total = total;
  }
}
