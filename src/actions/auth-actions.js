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

const signOutRequested = () => ({
  type: actionTypes.FETCH_SIGNOUT_REQUEST,
});

const signOutSucceed = () => ({
  type: actionTypes.FETCH_SIGNOUT_SUCCESS,
});

const signOutFailed = error => ({
  type: actionTypes.FETCH_SIGNOUT_FAILURE,
  payload: error,
});

export const fetchLogin = dispatch => async (service, body) => {
  dispatch(loginRequested());

  try {
    const { data: token } = await service.login(body);
    console.log(`ENTERED. TOKEN: ${token}`);
    dispatch(loginSucceed(token));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};

export const fetchSignOut = dispatch => async service => {
  dispatch(signOutRequested());

  try {
    const { data: { status } } = await service.signOut();
    console.log(`IS EXIT: ${status}`);
    dispatch(signOutSucceed());
  } catch (error) {
    dispatch(signOutFailed(error));
  }
};
