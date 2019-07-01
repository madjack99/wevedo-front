import React, { Component } from 'react';
import Apis from '../../api/modules/api.base';

const { ProviderApi } = Apis;

const api = new ProviderApi();


class ProviderWrapper extends Component {
    handleSubmit = async e => {
      e.preventDefault();
      const result = await api.fetchLists();
      console.log(result);
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="button">Hello</button>
          </form>
        </div>
      );
    }
}

export default ProviderWrapper;
