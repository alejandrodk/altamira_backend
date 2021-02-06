export default class LineasService {
  constructor(repository) {
    this.repository = repository;
  }

  getBrandsList = async () => {
    const brands = await this.repository.find();
    return brands;
  };
}
