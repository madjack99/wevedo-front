import config from '../config';


const { backendUrl } = config;

/**
 * @name Class Api
 * @description Provides basic CRUD operations
 * @param {String(Url)} resource e.g api/users
 */

export default class Api {
    constructor(resource) {
        this.resource = resource;
        this.backendUrl = backendUrl;
    }

    getHeaders = async () => {
        let headers = {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2ZlOGE4YWQ4ZjAwYzQ2YWNiOWM5YTIiLCJpYXQiOjE1NjA5NTgxMDh9.Uj8fbkqdfF3EeTNgEv9IFAmKLKahNVvrvVUL1iub_CQ',
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
        console.log(headers.authorization)
        return headers;
    }
    //registration user
    create = async (url, body) => fetch(`${this.backendUrl}/${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: await this.getHeaders(),
    }).then(raw => raw.json());

    //to make some changes / modify user 
    update = async (_id, body) => fetch(`${this.backendUrl}/${this.resource}/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: await this.getHeaders(),
    }).then(raw => raw.json());

    getList = async () => fetch(`${this.backendUrl}/${this.resource}`, { headers: await this.getHeaders() }).then(raw => raw.json());

    getOne = async _id => fetch(`${this.backendUrl}/${this.resource}/${_id}`, { headers: await this.getHeaders() }).then(raw => raw.json());

    remove = async _id => fetch(`${this.backendUrl}/${this.resource}/${_id}`, { method: 'DELETE', headers: await this.getHeaders() });

    request = async (url, params) => fetch(`${this.backendUrl}/${url}`, Object.assign({
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: await window.localStorage.getItem('wevedo_access_token') || '',
        },
    }, params)).then(raw => raw.json());
}

