import React, { useContext } from 'react';

import { WevedoServiceContext } from '../../contexts';

const withBookstoreService = () => Wrapped => props => {
  const wevedoService = useContext(WevedoServiceContext);

  const isEmail = email => email.includes('@');

  const checkProvider = async emailPhone =>
    wevedoService.checkProvider({
      email: isEmail(emailPhone) ? emailPhone : null,
      phoneNumber: isEmail(emailPhone) ? null : emailPhone,
    });

  return <Wrapped checkProvider={checkProvider} {...props} />;
};

export default withBookstoreService;
