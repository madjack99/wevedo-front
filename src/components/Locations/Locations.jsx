import React from 'react';
import LocationsSearchAreasRegionName from './SearchAreas/RegionName';
import LocationsSearchAreasCounty from './SearchAreas/County';
import LocationsSearchAreasCity from './SearchAreas/City';

function Locations({ match }) {
  const { searchArea } = match.params;

  const switchCaseSearchArea = searchArea => {
    switch (searchArea) {
      case 'regionName':
        return <LocationsSearchAreasRegionName />;
      case 'county':
        return <LocationsSearchAreasCounty />;
      case 'city':
        return <LocationsSearchAreasCity />;
      default:
        return <LocationsSearchAreasRegionName />;
    }
  };

  return <div>{switchCaseSearchArea(searchArea)}</div>;
}

export default Locations;
