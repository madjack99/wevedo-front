import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const ScreensLayoutsMain = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default ScreensLayoutsMain;
