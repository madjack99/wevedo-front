import React from 'react';
import { WevedoServiceConsumer } from '../wevedo-service-context';

const withBookstoreService = () => Wrapped => props => (
  <WevedoServiceConsumer>
    {
      wevedoService => <Wrapped {...props} wevedoService={wevedoService} />
    }
  </WevedoServiceConsumer>
);

export default withBookstoreService;
