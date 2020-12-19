
export class GetCategoryDto {
  constructor({ id, nombre } = {}) {
    this.id = id;
    this.nombre = nombre;
  }
}

export class GetUniqueCategoryDto {
  constructor({ nombre }={}) {
    this.nombre = nombre;
  }
}
