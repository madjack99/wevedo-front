import axios from 'axios';
import * as GB from '../countryLib/GB.json';
import * as Malaysia from '../countryLib/Malaysia.json';

const locations = { GB: GB.default.GB, MY: Malaysia.default.MY };
const largestLocations = { GB: GB.default, MY: Malaysia.default };

export const getLocation = country =>
  Object.keys(locations).find(location =>
    Object.keys(locations[location]).includes(country),
  );

export const getCountries = (appearInCountries = 'GB') => {
  let countryList = [];
  if (Array.isArray(appearInCountries)) {
    appearInCountries.forEach(country => {
      countryList = countryList.concat(Object.keys(locations[country]));
    });
  } else {
    countryList = Object.keys(locations[appearInCountries]);
  }
  return countryList;
};

export const getRegionNames = (appearInCountries = 'GB') => country =>
  Object.keys(locations[appearInCountries][country]);

export const getCounties = (appearInCountries = 'GB') => (
  country,
  regionName,
) => Object.keys(locations[appearInCountries][country][regionName]);

export const getCities = (appearInCountries = 'GB') => (
  country,
  regionName,
  county,
) => locations[appearInCountries][country][regionName][county];

export const getLargestRegions = appearInCountries => {
  if (!appearInCountries) {
    return largestLocations.GB['Largest Regions'];
  }
  return largestLocations[appearInCountries]['Largest Regions'];
};

export const getLargestCounties = (appearInCountries = 'GB') =>
  largestLocations[appearInCountries]['Largest Counties'];

export const getLargestCities = (appearInCountries = 'GB') =>
  largestLocations[appearInCountries]['Largest Cities'];

// Returns 2 letter abbreviation of a country according
// to the IP of the browser:
// GB - for Great Britain, MY - for Malaysia
export const getGeoInfo = async () => {
  let country;
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { data } = response;
    country = data.country;
  } catch (err) {
    country = null;
  }
  return country;
};
