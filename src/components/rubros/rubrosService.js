export default class LineasService {
  constructor(repository) {
    this.repository = repository;
    this.getCategoriesList = this.getCategoriesList.bind(this);
  }

  async getCategoriesList() {
    try {
      const categories = await this.repository.find();
      return categories;
    } catch (error) {
      console.error(error);
    }
  }

  async getUniqueCategories() {
    try {
      const categories = await this.repository.find();
      return categories.reduce((acc, curr) => {
        const name = curr.nombre;
        if (!acc.find(({ nombre }) => nombre === name)) {
          acc.push(curr);
        }
        return acc;
      }, []);
    } catch (error) {
      console.error(error);
    }
  }
}
