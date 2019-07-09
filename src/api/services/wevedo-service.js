import ApiBase from '../api-base';

export default class WevedoService extends ApiBase {
  constructor() {
    super('api');

    this.login = async body => this.create('login', body);
    this.register = async body => this.create('register', body);
    this.checkEmail = async body => {
      try {
        await this.create('check-email', body);
        return true;
      } catch (error) {
        return false;
      }
    };
    this.signOut = async () => this.get('signout');

    this.getCategories = () => this.get('categories');

    this.getListByCategory = (category, page = 1) => this.get(
      `providers/categories/${category}?page=${page}`,
    );
    this.getProvidersByFilters = category => this.get(`providers/by-category/${category}`);
  }
}
