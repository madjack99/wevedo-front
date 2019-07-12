import * as actionTypes from '../actions/types';

const updateSessionData = (state, action) => {
  if (!state) {
    return {
      isLoggedIn: false,
      token: null,
      error: null,
    };
  }

  switch (action.type) {
    case actionTypes.EXTRACT_TOKEN_FROM_COOKIES:
      return {
        isLoggedIn: !!action.payload,
        token: action.payload,
        error: null,
      };
    case actionTypes.FETCH_LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        token: null,
        error: null,
      };
    case actionTypes.FETCH_LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        token: action.payload,
        error: null,
      };
    case actionTypes.FETCH_LOGIN_FAILURE:
      return {
        isLoggedIn: false,
        token: null,
        error: action.payload,
      };
    case actionTypes.EXISTING_EMAIL:
      return {
        ...state.sessionData,
        error: action.payload,
      };
    case actionTypes.FETCH_SIGNOUT_REQUEST:
      return {
        ...state.sessionData,
        isLoggedIn: false,
        // token: state.sessionData.token,
        // error: null,
      };
    case actionTypes.FETCH_SIGNOUT_SUCCESS:
      return {
        ...state.sessionData,
        token: null,
      };
    case actionTypes.FETCH_SIGNOUT_FAILURE:
      return {
        ...state.sessionData,
        token: null,
        error: action.payload,
      };
    default:
      return state.sessionData;
  }
};

export default updateSessionData;
