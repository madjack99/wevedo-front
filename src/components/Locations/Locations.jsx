import React from 'react';
import LocationsSearchAreasRegionName from './SearchAreas/RegionName';

function Locations({ match }) {
  const { searchArea } = match.params;

  const switchCaseSearchArea = searchArea => {
    switch (searchArea) {
      case 'regionName':
        return <LocationsSearchAreasRegionName />;
      case 'county':
        return 'Showing counties';
      case 'city':
        return 'Showing cities';
      default:
        return 'Showing default';
    }
  };

  return <div>{switchCaseSearchArea(searchArea)}</div>;
}

export default Locations;
