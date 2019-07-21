import * as actionTypes from './types';

const userRequested = () => ({
  type: actionTypes.FETCH_USER_REQUEST,
});

const userSucceed = user => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

const userFailed = error => ({
  type: actionTypes.FETCH_USER_FAILURE,
  payload: error,
});

const updateUserRequested = () => ({
  type: actionTypes.UPDATE_USER_REQUEST,
});

const updateUserSucceed = body => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  payload: body,
});

const updateUserFailed = error => ({
  type: actionTypes.UPDATE_USER_FAILURE,
  payload: error,
});

export const fetchUser = dispatch => async getProfile => {
  dispatch(userRequested());

  try {
    const { data: user } = await getProfile();
    dispatch(userSucceed(user));
  } catch (error) {
    dispatch(userFailed(error));
  }
};

export const updateUser = dispatch => update => async body => {
  dispatch(updateUserRequested());

  if (!update) {
    dispatch(updateUserSucceed(body));
    return true;
  }

  try {
    await update(body);
    dispatch(updateUserSucceed(body));
    return true;
  } catch (error) {
    dispatch(updateUserFailed(error));
    return false;
  }
};

export const removeUser = () => ({
  type: actionTypes.REMOVE_USER,
});
