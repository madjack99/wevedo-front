import axios from 'axios';
import * as unitedKingdom from '../countryLib/GB.json';
import * as Malaysia from '../countryLib/Malaysia.json';

const locations = {
  'United Kingdom': unitedKingdom.default['United Kingdom'],
  Malaysia: Malaysia.default.Malaysia,
};
const largestLocations = {
  'United Kingdom': unitedKingdom.default,
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

// Because United Kingdom is a country itself and at the same time
// it includes four other countries we need to specify the initial
// bigger country like UK to get correct regions and counties in
// locations object and countryLib (only for UK)
const getCountriesForUKOnly = country => {
  const arrayOfUKCountries = [
    'England',
    'Scotland',
    'Wales',
    'Northern Ireland',
  ];
  if (arrayOfUKCountries.includes(country)) {
    return 'United Kingdom';
  }
  return country;
};

export const getRegionNames = (chosenCountry = 'United Kingdom') => {
  const country = chosenCountry;
  chosenCountry = getCountriesForUKOnly(country);
  return Object.keys(locations[chosenCountry][country]);
};

export const getCounties = (chosenCountry = 'United Kingdom', regionName) => {
  const country = chosenCountry;
  chosenCountry = getCountriesForUKOnly(country);
  return Object.keys(locations[chosenCountry][country][regionName]);
};

export const getCities = (
  chosenCountry = 'United Kingdom',
  regionName,
  county,
) => {
  const country = chosenCountry;
  chosenCountry = getCountriesForUKOnly(country);
  return locations[chosenCountry][country][regionName][county];
};

export const getLargestRegions = country => {
  if (!country) {
    return largestLocations['United Kingdom']['Largest Regions'];
  }
  return largestLocations[country]['Largest Regions'];
};

export const getLargestCounties = country => {
  if (!country) {
    return largestLocations['United Kingdom']['Largest Counties'];
  }
  return largestLocations[country]['Largest Counties'];
};

export const getLargestCities = country => {
  if (!country) {
    return largestLocations['United Kingdom']['Largest Cities'];
  }
  return largestLocations[country]['Largest Cities'];
};

// Returns full name of a country according
// to the IP of the browser:
// United Kingdom, Malaysia
export const getGeoInfo = async () => {
  let countryName;
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { data } = response;
    countryName = data.country_name;
  } catch (err) {
    countryName = null;
  }
  return countryName;
};

export const showIpDetectedOrUserSelectedCountry = (
  ipDetectedCountry,
  userSelectedCountry,
) => {
  return userSelectedCountry || ipDetectedCountry;
};
