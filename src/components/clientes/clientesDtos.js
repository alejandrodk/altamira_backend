/* eslint-disable camelcase */
export class ClientDto {
  constructor({
    id,
    numero,
    razon_social,
    cuit,
    direccion,
    cod_postal,
    telefono,
    correo,
    viajante_id,
    condicion_pago,
    precio_especial,
    transporte,
  } = {}) {
    this.id = id;
    this.numero = numero;
    this.razon_social = razon_social;
    this.cuit = cuit;
    this.direccion = direccion;
    this.cod_postal = cod_postal;
    this.telefono = telefono;
    this.correo = correo;
    this.viajante_id = viajante_id;
    this.condicion_pago = condicion_pago;
    this.precio_especial = precio_especial;
    this.transporte = transporte;
  }
}

export class BasicClientDto {
  constructor({ id, numero, razon_social } = {}) {
    this.id = id;
    this.numero = numero;
    this.razon_social = razon_social;
  }
}
