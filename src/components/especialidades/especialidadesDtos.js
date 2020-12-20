
export class GetSpeciallityDto {
  constructor({ id, nombre } = {}) {
    this.id = id;
    this.nombre = nombre;
  }
}

export class GetUniqueSpeciallityDto {
  constructor({ nombre }={}) {
    this.nombre = nombre;
  }
}
