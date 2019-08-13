export default {
  backendUrl:
    process.env.REACT_APP_STAGE === 'QA'
      ? 'https://wevedo.herokuapp.com'
      : process.env.REACT_APP_STAGE === 'PROD'
      ? 'https://wevedo-backend.appspot.com'
      : 'http://localhost:8000',
  facebookAppId: '2867895813227533',
  googleAppId:
    '692103359776-ge0g7j149nbis5m09amuegnjm5hgg603.apps.googleusercontent.com',
  suppliersPerPage: 10,
  pageRangeDisplayed: 3,
  cloudinary: {
    apiKey: '294357151451223',
    apiSecret: '8Q03lPaNnsQ3vNbwlypnGKdDwO0',
    cloud: 'wevedo',
  },
  timeForServerRequest: 2500,
};
