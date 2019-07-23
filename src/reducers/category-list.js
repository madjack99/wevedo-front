import * as actionTypes from '../actions/types';

const updateCategoryList = (state, action) => {
  if (!state) {
    return {
      categories: [],
      categoryError: null,
    };
  }

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        categories: [],
        categoryError: null,
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        categoryError: null,
      };
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        categories: [],
        categoryError: action.payload,
      };
    default:
      return state.categoryList;
  }
};

export default updateCategoryList;
