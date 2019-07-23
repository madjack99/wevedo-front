import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import App from './app';
import store from '../../store';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow((
    <Provider store={store}>
      <App />
    </Provider>
  ));
});
