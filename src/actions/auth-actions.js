import * as actionTypes from './types';

const loginRequested = () => ({
  type: actionTypes.FETCH_LOGIN_REQUEST,
});

const loginSucceed = token => ({
  type: actionTypes.FETCH_LOGIN_SUCCESS,
  payload: token,
});

const loginFailed = error => ({
  type: actionTypes.FETCH_LOGIN_FAILURE,
  payload: error,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchLogin = dispatch => async (service, body) => {
  dispatch(loginRequested());

  try {
    const { data: token } = await service.login(body);
    dispatch(loginSucceed(token));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};
