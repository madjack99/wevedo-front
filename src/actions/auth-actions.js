import Cookies from 'js-cookie';

import * as actionTypes from './types';

const signUpRequested = () => ({
  type: actionTypes.FETCH_SIGNUP_REQUEST,
});

const signUpSucceed = () => ({
  type: actionTypes.FETCH_SIGNUP_SUCCESS,
});

const signUpFailed = error => ({
  type: actionTypes.FETCH_SIGNUP_FAILURE,
  payload: error,
});

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

export const existingEmail = error => ({
  type: actionTypes.EXISTING_EMAIL,
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

export const fetchSignUp = dispatch => async (register, body) => {
  dispatch(signUpRequested());

  try {
    await register(body);
    dispatch(signUpSucceed());
  } catch (error) {
    dispatch(signUpFailed(error.response.data.message));
  }
};

export const fetchLogin = dispatch => async (login, body) => {
  dispatch(loginRequested());

  try {
    const { data: token } = await login(body);
    console.log(`ENTERED. TOKEN: ${token}`);
    Cookies.set('token', token);
    dispatch(loginSucceed(token));
  } catch (error) {
    dispatch(loginFailed(error.response.data.message));
  }
};

export const fetchSignOut = dispatch => async service => {
  dispatch(signOutRequested());

  try {
    const { data: { status } } = await service.signOut();
    console.log(`IS EXIT: ${status}`);
    Cookies.remove('token');
    dispatch(signOutSucceed());
  } catch (error) {
    dispatch(signOutFailed(error));
  }
};

export const resetError = () => ({
  type: actionTypes.RESET_ERROR,
});
