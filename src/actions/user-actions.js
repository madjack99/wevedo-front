import * as actionTypes from './types';
import { getGeoInfo } from '../helpers';
import config from '../config';

const userRequested = () => ({
  type: actionTypes.FETCH_USER_REQUEST,
});

const userSucceed = user => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

const userFailed = error => ({
  type: actionTypes.FETCH_USER_FAILURE,
  payload: error,
});

const updateUserRequested = () => ({
  type: actionTypes.UPDATE_USER_REQUEST,
});

const updateUserSucceed = body => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  payload: body,
});

const updateUserFailed = error => ({
  type: actionTypes.UPDATE_USER_FAILURE,
  payload: error,
});

export const fetchUser = dispatch => async getProfile => {
  dispatch(userRequested());

  try {
    const { data: user } = await getProfile();
    console.log('USER: ', user);
    dispatch(userSucceed(user));
  } catch (error) {
    dispatch(userFailed(error));
  }
};

export const updateUser = dispatch => update => async body => {
  dispatch(updateUserRequested());

  if (!update) {
    dispatch(updateUserSucceed(body));
    return true;
  }

  try {
    const { data } = await update(body);
    dispatch(updateUserSucceed(body));
    return data;
  } catch (error) {
    dispatch(updateUserFailed(error));
    return null;
  }
};

export const removeUser = () => ({
  type: actionTypes.REMOVE_USER,
});

export const detectCountryByIp = () => {
  return async () => {
    let detectedCountry = await getGeoInfo();
    // Put country into store only if this country
    // is included into the list of allowed countries,
    // otherwise put empty string which renders UK
    // locations by default
    if (!config.allowedInCountries.includes(detectedCountry)) {
      detectedCountry = '';
    }
    console.log(detectedCountry);
    return {
      type: actionTypes.DETECT_COUNTRY_BY_IP,
      payload: detectedCountry,
    };
  };
};

// use getIPCountry to find out current country by IP,
// put this country to state which will be later added
// to cookies. Depending on current country show different
// places in getLargestRegions and etc.
// useEffect(() => {
//   const getIPCountry = async () => {
//     const currentIPCountry = await getGeoInfo();
//     setCountryByIP(currentIPCountry);
//   };
//   getIPCountry();
// }, []);

// Put country into cookie only if this country
// is included into the list of allowed countries,
// otherwise put empty string which renders UK
// locations by default
// if (allowedInCountries.includes(countryByIP)) {
//   Cookies.set('currentIPCountry', countryByIP);
// } else {
//   Cookies.set('currentIPCountry', '');
// }
