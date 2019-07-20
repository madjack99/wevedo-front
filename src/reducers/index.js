import updateSessionData from './session-data';
import updateUserData from './user-data';
import updateCategoryList from './category-list';

const reducer = (state, action) => ({
  sessionData: updateSessionData(state, action),
  userData: updateUserData(state, action),
  categoryList: updateCategoryList(state, action),
});

export default reducer;
