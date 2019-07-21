import * as actionTypes from './types';

const categoriesRequested = () => ({
  type: actionTypes.FETCH_CATEGORIES_REQUEST,
});

const categoriesSucceed = categories => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

const categoriesFailed = error => ({
  type: actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchCategories = dispatch => async getCategories => {
  dispatch(categoriesRequested());

  try {
    const { data: categories } = await getCategories();
    dispatch(categoriesSucceed(categories));
    return categories;
  } catch (error) {
    dispatch(categoriesFailed());
    return null;
  }
};
