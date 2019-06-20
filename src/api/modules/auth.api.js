import Api from './api.base';

/**
 * @name Class AuthApi
 * @extends Api
 */

export default class AuthApi extends Api {
  loginUserByEmailOrPhone = async creds => {
    try {
      const response = await this.request('api/login', {
        method: 'POST',
        body: JSON.stringify(Object.assign(creds, { deviceOS: 'android' })),
      });

      if (response.message || response.error) {
        return { error: response.message || response.error };
      }
      return response;
    } catch ({ message }) {
      return message;
    }
  };

  signupUserByEmailOrPhone = async data => {
    try {
      const response = await this.request('api/register', {
        method: 'POST',
        body: JSON.stringify(Object.assign(data, { deviceOS: 'android' })),
      });
      if (response.message || response.error) {
        return { error: response.message || response.error };
      }
      return response;
    } catch ({ message }) {
      return message;
    }
  };
}
