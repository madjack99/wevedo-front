import * as actionTypes from '../actions/types';

const updateUserData = (state, action) => {
  if (!state) {
    return {
      user: {},
      userError: null,
      ipDetectedCountry: '',
      userSelectedCountry: '',
    };
  }

  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return {
        ...state.userData,
        user: {},
        userError: null,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state.userData,
        user: action.payload,
        userError: null,
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        ...state.userData,
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
        ...state.userData,
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
        ...state.userData,
        user: {},
        userError: null,
      };
    case actionTypes.SET_DETECTED_COUNTRY:
      return {
        ...state.userData,
        ipDetectedCountry: action.payload,
      };
    case actionTypes.SET_COUNTRY_SELECTED_BY_USER:
      return {
        ...state.userData,
        userSelectedCountry: action.payload,
      };
    default:
      return state.userData;
  }
};

export default updateUserData;
