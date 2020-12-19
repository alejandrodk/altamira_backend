/* eslint-disable camelcase */
export class ProductCatalogDto {
  constructor({
    id,
    codigo,
    oem,
    modelos,
    descripcion,
    caracteristicas,
    stock,
    unidad_min_vta,
    destacado,
    nuevo,
    precio,
  } = {}) {
    this.id = id;
    this.codigo = codigo;
    this.oem = oem;
    this.modelos = modelos;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
    this.stock = stock;
    this.unidad_min_vta = unidad_min_vta;
    this.destacado = destacado;
    this.nuevo = nuevo;
    this.precio = precio;
  }
}

export class BasicProductDto {
  constructor({ id, codigo, oem, modelos, descripcion, precio } = {}) {
    this.id = id;
    this.codigo = codigo;
    this.oem = oem;
    this.modelos = modelos;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
