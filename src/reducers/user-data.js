import * as actionTypes from '../actions/types';

const updateUserData = (state, action) => {
  if (!state) {
    return {
      user: {},
      userError: null,
    };
  }

  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return {
        user: {},
        userError: null,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        user: action.payload,
        userError: null,
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        user: {},
        userError: action.payload,
      };
    case actionTypes.UPDATE_USER_REQUEST:
      return {
        ...state.userData,
        userError: null,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        user: {
          ...state.userData.user,
          ...action.payload,
        },
        userError: null,
      };
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state.userData,
        userError: action.payload,
      };
    case actionTypes.REMOVE_USER:
      return {
        user: {},
        userError: null,
      };
    default:
      return state.userData;
  }
};

export default updateUserData;