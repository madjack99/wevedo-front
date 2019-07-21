import React from 'react';

import './service-info.scss';

import ScreensUpdatingLayout from '../../layout/updating';
import ServiceInfoUpdatingForm from '../../../components/form/updating/service-info';

const ScreensUserSignUp = () => (
  <ScreensUpdatingLayout title="Basic info">
    <ServiceInfoUpdatingForm />
  </ScreensUpdatingLayout>
);

export default ScreensUserSignUp;
