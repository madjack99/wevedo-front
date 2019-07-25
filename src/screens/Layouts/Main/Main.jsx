import React from 'react';

import Header from '../../../components/Header';
import PopularSearches from '../../../components/PopularSearches';
import Footer from '../../../components/Footer';

const ScreensLayoutsMain = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <PopularSearches />
    <Footer />
  </React.Fragment>
);

export default ScreensLayoutsMain;
