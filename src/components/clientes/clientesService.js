export default class ClientesService {
  constructor(repository) {
    this.repository = repository;
  }

  getSingleClient = async (id) => {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      console.error(error);
    }
  }

  getClientsList = async (options) => {
    try {
      return await this.repository.find(options);
    } catch (error) {
      console.error(error);
    }
  }
}
