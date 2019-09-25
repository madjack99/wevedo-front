import axios from 'axios';
import * as GB from '../countryLib/GB.json';

const locations = { GB: GB.default.GB };
const largestLocations = { GB: GB.default };

export const getLocation = country =>
  Object.keys(locations).find(location =>
    Object.keys(locations[location]).includes(country),
  );

export const getCountries = (appearInCountries = 'GB') =>
  Object.keys(locations[appearInCountries]);

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

export const getLargestRegions = (appearInCountries = 'GB') =>
  largestLocations[appearInCountries]['Largest Regions'];

export const getLargestCounties = (appearInCountries = 'GB') =>
  largestLocations[appearInCountries]['Largest Counties'];

export const getLargestCities = (appearInCountries = 'GB') =>
  largestLocations[appearInCountries]['Largest Cities'];

export const getGeoInfo = async () => {
  let country;
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { data } = response;
    country = data.country_name;
  } catch (err) {
    country = null;
  }
  console.log(country);
  return country;
};
