import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';

import * as actionTypes from './actions/types';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch({
  type: actionTypes.EXTRACT_TOKEN_FROM_COOKIES,
  payload: Cookies.get('token'),
});

export default store;
