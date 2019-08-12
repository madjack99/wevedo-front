import React from 'react';
import { Container } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import backgroundImage from '../../assets/images/common-header.png';

import ScreensLayoutsMain from '../Layouts/Main';
import eula from '../../assets/files/wevedo_eula.pdf';

const TermsAndConditions = ({ t }) => (
  <ScreensLayoutsMain
    title={t('terms.jumbotron')}
    backgroundImage={backgroundImage}
  >
    <Container className="mt-5 mb-5">
      <embed src={eula} type="application/pdf" width="100%" height="500px" />
    </Container>
  </ScreensLayoutsMain>
);

export default withTranslation('common')(TermsAndConditions);
