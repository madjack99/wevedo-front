import ApiBase from '../api-base';

export default class WevedoService extends ApiBase {
  constructor() {
    super('api');

    this.login = async body => this.create('login', body);
    this.register = async body => this.create('register', body);
    this.signOut = async () => this.get('signout');

    this.getCategories = () => this.get('categories');
  }
}
