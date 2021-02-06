export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getBrandsList = async () => {
    try {
      const brands = await this.repository.find();
      return brands;
    } catch (error) {
      console.error(error);
    }
  };
}
