import Api from '../api.base';

const resource = 'api/providers';

/**
 * @name Class ProviderApi
 * @extends Api
 */
export default class ProviderApi extends Api {
    constructor() {
        super(resource);
    }

    fetchLists = async () => {
        try {
            const response = await this.request(`api/providers`, { method : 'POST'});
            console.log(response)
            return response;
        } catch (error) {
            console.log(error);
        }
    };
}
