import axios from 'axios';

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

    this.create = async (path, body, token) => instance
      .post(path, body, { headers: { Authorization: token } });

    this.read = async (path, token) => instance
      .get(path, { headers: { Authorization: token } });

    this.update = async (path, body, token) => instance
      .patch(path, body, { headers: { Authorization: token } });

    this.remove = async (path, token) => instance
      .delete(path, { headers: { Authorization: token } });
  }
}
