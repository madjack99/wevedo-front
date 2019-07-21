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

const emailStatusRequested = () => ({
  type: actionTypes.FETCH_EMAIL_STATUS_REQUEST,
});

const emailStatusSucceed = () => ({
  type: actionTypes.FETCH_EMAIL_STATUS_SUCCESS,
});

const emailStatusFailed = error => ({
  type: actionTypes.FETCH_EMAIL_STATUS_FAILURE,
  payload: error,
});

export const resetError = () => ({
  type: actionTypes.RESET_ERROR,
});

export const fetchSignUp = dispatch => async (register, body) => {
  dispatch(signUpRequested());

  try {
    const { data } = await register(body);
    dispatch(signUpSucceed());
    return data;
  } catch (error) {
    dispatch(signUpFailed(error.response.data.message));
    return null;
  }
};

export const fetchLogin = dispatch => async (login, body) => {
  dispatch(loginRequested());

  try {
    const { data: token } = await login(body);
    console.log(`ENTERED. TOKEN: ${token}`);
    Cookies.set('token', token);
    dispatch(loginSucceed(token));
    return token;
  } catch (error) {
    dispatch(loginFailed(error.response.data.message));
    return null;
  }
};

export const fetchSignOut = dispatch => async service => {
  dispatch(signOutRequested());

  try {
    const { data, data: { status } } = await service.signOut();
    console.log(`IS EXIT: ${status}`);
    Cookies.remove('token');
    dispatch(signOutSucceed());
    return data;
  } catch (error) {
    dispatch(signOutFailed(error));
    return null;
  }
};

export const fetchEmailStatus = dispatch => async (body, checkEmail) => {
  dispatch(emailStatusRequested());

  try {
    const { data } = await checkEmail(body);
    dispatch(emailStatusSucceed());
    return data;
  } catch (error) {
    dispatch(emailStatusFailed(error.response.data.message));
    return null;
  }
};
