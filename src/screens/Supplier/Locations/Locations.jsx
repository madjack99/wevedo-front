import React from 'react';
import ScreensLayoutMain from '../../Layouts/Main';
import backgroundImage from '../../../assets/images/venues-bg.png';
import Locations from '../../../components/Locations';

function ScreensSupplierLocations({ match }) {
  console.log('location');
  return (
    <ScreensLayoutMain title="Locations" backgroundImage={backgroundImage}>
      <Locations match={match} />
    </ScreensLayoutMain>
  );
}

export default ScreensSupplierLocations;
