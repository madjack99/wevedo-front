export default {
  backendUrl:
    process.env.REACT_APP_STAGE === 'QA'
      ? 'https://wevedo.herokuapp.com'
      : process.env.REACT_APP_STAGE === 'PROD'
      ? 'https://wevedo-backend.appspot.com'
      : 'http://localhost:8000',
  facebookAppId: '348292309185098',
  googleAppId:
    '692103359776-ge0g7j149nbis5m09amuegnjm5hgg603.apps.googleusercontent.com',
  suppliersPerPage: 10,
  pageRangeDisplayed: 3,
};
