import axios from 'axios';
import * as GB from '../countryLib/GB.json';
import * as Malaysia from '../countryLib/Malaysia.json';

const locations = {
  'United Kingdom': GB.default['United Kingdom'],
  Malaysia: Malaysia.default.Malaysia,
};
const largestLocations = {
  'United Kingdom': GB.default,
  Malaysia: Malaysia.default,
};

export const getLocation = country =>
  Object.keys(locations).find(location =>
    Object.keys(locations[location]).includes(country),
  );

export const getCountries = appearInCountries => {
  let countryList = [];
  if (Array.isArray(appearInCountries)) {
    appearInCountries.forEach(country => {
      countryList = countryList.concat(Object.keys(locations[country]));
    });
  } else if (!appearInCountries) {
    countryList = Object.keys(locations['United Kingdom']);
  } else {
    countryList = Object.keys(locations[appearInCountries]);
  }
  return countryList;
};

export const getRegionNames = (
  appearInCountries = 'United Kingdom',
) => country => Object.keys(locations[appearInCountries][country]);

export const getCounties = (appearInCountries = 'United Kingdom') => (
  country,
  regionName,
) => Object.keys(locations[appearInCountries][country][regionName]);

export const getCities = (appearInCountries = 'United Kingdom') => (
  country,
  regionName,
  county,
) => locations[appearInCountries][country][regionName][county];

export const getLargestRegions = appearInCountries => {
  if (!appearInCountries) {
    return largestLocations['United Kingdom']['Largest Regions'];
  }
  return largestLocations[appearInCountries]['Largest Regions'];
};

export const getLargestCounties = appearInCountries => {
  if (!appearInCountries) {
    return largestLocations['United Kingdom']['Largest Regions'];
  }
  return largestLocations[appearInCountries]['Largest Counties'];
};

export const getLargestCities = appearInCountries => {
  if (!appearInCountries) {
    return largestLocations['United Kingdom']['Largest Regions'];
  }
  return largestLocations[appearInCountries]['Largest Cities'];
};

// Returns full name of a country according
// to the IP of the browser:
// GB - for Great Britain, MY - for Malaysia
export const getGeoInfo = async () => {
  let countryName;
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { data } = response;
    countryName = data.country_name;
  } catch (err) {
    countryName = null;
  }
  console.log(countryName);
  return countryName;
};
