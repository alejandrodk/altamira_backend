/* eslint-disable camelcase */
export class OrderCreateDto {
  constructor({ cliente, fecha, nota, items }) {
    this.cliente_id = cliente;
    this.fecha = fecha;
    this.nota = nota;
    this.total_items = items;
  }
}

export class OrderClientDto {
  constructor({ id, cliente_id, estado, fecha, nota, total_items } = {}) {
    this.id = id;
    this.fecha = fecha;
    this.items = total_items;
  }
}

export class OrderGetDto {
  constructor({ id, cliente_id, estado, fecha, nota, total_items } = {}) {
    this.id = id;
    this.cliente = cliente_id;
    this.estado = estado;
    this.fecha = fecha;
    this.nota = nota;
    this.items = total_items;
  }
}
