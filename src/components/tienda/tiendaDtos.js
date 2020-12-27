/* eslint-disable camelcase */
export class CreateCartProductDto {
  constructor(
      { codigo, linea_id, unidad_min_vta, stock, precio, descripcion } = {},
      cantidad,
  ) {
    this.codigo = codigo;
    this.linea = linea_id;
    this.cantidad = cantidad || unidad_min_vta;
    this.minVta = unidad_min_vta;
    this.stock = stock;
    this.precio = precio;
    this.descripcion = descripcion;
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
