export default {
  backendUrl:
    process.env.REACT_APP_STAGE === 'QA'
      ? 'https://wevedo.herokuapp.com'
      : process.env.REACT_APP_STAGE === 'PROD'
      ? 'https://wevedo-backend.appspot.com'
      : 'http://localhost:8000',
  facebookAppId: '2867895813227533',
  googleAppId:
    '692103359776-fin2edefs5entl9ulje563slm29hu62m.apps.googleusercontent.com',
  suppliersPerPage: 10,
  pageRangeDisplayed: 3,
  cloudinary: {
    apiKey: '294357151451223',
    apiSecret: '8Q03lPaNnsQ3vNbwlypnGKdDwO0',
    cloud: 'wevedo',
  },
  timeForServerRequest: 2500,
  allowedInCountries: ['GB'],
  promotedSuppliers: [
    '5badd83a0f58a3001009b5b8',
    '5bcd980cb111ee00167fa3b9',
    '5bcd935fb111ee00167fa3b8',
    '5bacccad6b70be001a0dcb29',
  ],
};
