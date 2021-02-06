export default class ClientesService {
  constructor(repository) {
    this.repository = repository;
  }

  getSingleClient = async id => {
    return await this.repository.findById(id);
  };

  getClientsList = async options => {
    return await this.repository.find(options);
  };
}
