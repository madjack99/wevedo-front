import axios from 'axios';

import store from '../store';
import config from '../config';

export default class ApiBase {
  constructor(resource = '') {
    const instance = axios.create({
      baseURL: `${config.backendUrl}/${resource}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.withToken = instance => {
      instance.interceptors.request.use(config => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: store.getState().sessionData.token,
        },
      }));

      return instance;
    };

    this.create = async (path, body) =>
      this.withToken(instance).post(path, body);

    this.get = async path => this.withToken(instance).get(path);

    this.update = async (path, body) =>
      this.withToken(instance).patch(path, body);

    this.remove = async path => this.withToken(instance).delete(path);
  }
}
