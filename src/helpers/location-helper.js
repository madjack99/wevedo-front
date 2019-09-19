import * as GB from '../countryLib/GB.json';

// TO-DO: return data depending on 'appearInCountries'

const GBLocations = GB.default.GB;

export const getCountries = appearInCountries => Object.keys(GBLocations);

export const getRegionNames = country => Object.keys(GBLocations[country]);

export const getCounties = (country, regionName) =>
  Object.keys(GBLocations[country][regionName]);

export const getCities = (country, regionName, county) =>
  GBLocations[country][regionName][county];

export const getLargestRegions = appearInCountries =>
  GB.default['Largest Regions'];

export const getLargestCounties = appearInCountries =>
  GB.default['Largest Counties'];

export const getLargestCities = appearInCountries =>
  GB.default['Largest Cities'];
