export default class ProductosService {
  constructor(repository) {
    this.repository = repository;
    this.getProductsList = this.getProductsList.bind(this);
  }

  async getProductsList() {
    try {
      const prods = await this.repository.find();
      return prods;
    } catch (error) {
      console.error(error);
    }
  }
}
