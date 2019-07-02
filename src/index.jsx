import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import WevedoService from './api/services/wevedo-service';
import { WevedoServiceProvider } from './components/wevedo-service-context';

const wevedoService = new WevedoService();

ReactDOM.render((
  <WevedoServiceProvider value={wevedoService}>
    <Router>
      <App />
    </Router>
  </WevedoServiceProvider>
), document.getElementById('root'));
