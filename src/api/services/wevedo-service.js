import ApiBase from '../api-base';

export default class WevedoService extends ApiBase {
  constructor() {
    super('api');

    this.login = async body => this.create('login', body);
    this.register = async body => this.create('register', body);
    this.socialLogin = async body => this.create('social-login', body);
    this.checkEmail = async body => this.create('check-email', body);
    this.checkPhone = async body => this.create('check-phone', body);
    this.signOut = async () => this.get('signout');

    this.getProfile = async () => this.get('users/me');
    this.updateProfile = async body => this.update('users/me', body);

    this.getCategories = () => this.get('categories');
    this.getSuppliersByFilters = (
      category,
      page,
      filterOptions,
      supplierTitleQuery,
    ) => {
      const filterString = JSON.stringify(filterOptions);
      return this.get(
        `providers/by-category/${category}?page=${page}&filterOptions=${filterString}&providerTitleQuery=${supplierTitleQuery}`,
      );
    };
    this.getSupplierById = id => this.get(`providers/${id}`);
  }
}
