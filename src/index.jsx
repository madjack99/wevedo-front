import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './components/App';
import WevedoService from './api/services/wevedo-service';
import { WevedoServiceContext } from './components/contexts';
import store from './store';
import commonEN from './translations/en/common.json';

const wevedoService = new WevedoService();

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: commonEN,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <WevedoServiceContext.Provider value={wevedoService}>
        <App />
      </WevedoServiceContext.Provider>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
