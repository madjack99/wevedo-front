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

export const fetchUser = dispatch => async getProfile => {
  dispatch(userRequested());

  try {
    const { data: user } = await getProfile();
    dispatch(userSucceed(user));
  } catch (error) {
    dispatch(userFailed(error));
  }
};

export const removeUser = () => ({
  type: actionTypes.REMOVE_USER,
});
