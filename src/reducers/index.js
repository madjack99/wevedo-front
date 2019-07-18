import updateSessionData from './session-data';
import updateCategoryList from './category-list';

const reducer = (state, action) => ({
  sessionData: updateSessionData(state, action),
  categoryList: updateCategoryList(state, action),
});

export default reducer;
