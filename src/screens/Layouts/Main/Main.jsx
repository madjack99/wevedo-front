import React from 'react';

import { withScrollToTop } from '../../../components/HOC';

import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PopularSearches from '../../../components/PopularSearches';
import Footer from '../../../components/Footer';

const ScreensLayoutsMain = ({ title, subtitle, backgroundImage, children }) => (
  <React.Fragment>
    <Header />
    <Hero title={title} subtitle={subtitle} backgroundImage={backgroundImage} />
    {children}
    <PopularSearches />
    <Footer />
  </React.Fragment>
);

export default withScrollToTop()(ScreensLayoutsMain);
