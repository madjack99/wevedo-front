import updateSessionData from './session-data';

const reducer = (state, action) => ({
  sessionData: updateSessionData(state, action),
});

export default reducer;
