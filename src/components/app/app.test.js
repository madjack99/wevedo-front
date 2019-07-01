import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});
