export default class ClientesService {
  constructor(repository) {
    this.repository = repository;
    this.getSingleClient = this.getSingleClient.bind(this);
    this.getClientsList = this.getClientsList.bind(this);
  }

  async getSingleClient(id) {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      console.error(error);
    }
  }

  async getClientsList(options) {
    try {
      return await this.repository.find(options);
    } catch (error) {
      console.error(error);
    }
  }
}
