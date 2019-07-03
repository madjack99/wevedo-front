import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import WevedoService from './api/services/wevedo-service';
import { WevedoServiceContext } from './components/contexts';
import store from './store';

const wevedoService = new WevedoService();

ReactDOM.render((
  <Provider store={store}>
    <WevedoServiceContext.Provider value={wevedoService}>
      <Router>
        <App />
      </Router>
    </WevedoServiceContext.Provider>
  </Provider>
), document.getElementById('root'));
