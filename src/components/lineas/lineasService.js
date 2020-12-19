export default class LineasService {
  constructor(repository) {
    this.repository = repository;
    this.getBrandsList = this.getBrandsList.bind(this);
  }

  async getBrandsList() {
    try {
      const brands = await this.repository.find();
      return brands;
    } catch (error) {
      console.error(error);
    }
  }
}
