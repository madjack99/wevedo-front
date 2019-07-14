import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './components/app';
import WevedoService from './api/services/wevedo-service';
import { WevedoServiceContext } from './components/contexts';
import store from './store';
import common_en from './translations/en/common.json';

const wevedoService = new WevedoService();

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <WevedoServiceContext.Provider value={wevedoService}>
        <Router>
          <App />
        </Router>
      </WevedoServiceContext.Provider>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
