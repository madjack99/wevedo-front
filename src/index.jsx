import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import WevedoService from './api/services/wevedo-service';
import { WevedoServiceContext } from './components/contexts';

const wevedoService = new WevedoService();

ReactDOM.render((
  <WevedoServiceContext.Provider value={wevedoService}>
    <Router>
      <App />
    </Router>
  </WevedoServiceContext.Provider>
), document.getElementById('root'));
