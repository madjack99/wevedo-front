import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StripeCheckout from 'react-stripe-checkout';

import config from '../../../../../config';
import { WevedoServiceContext } from '../../../../../contexts';
import { updateUser } from '../../../../../actions/user-actions';

const BusinessFormsSignupPayment = ({ user, updateUser, nextStep }) => {
  const [price, setPrice] = useState(0);
  const wevedoService = useContext(WevedoServiceContext);

  useEffect(() => {
    const fetchPrice = async () => {
      const { data: newPrice } = await wevedoService.getPrice(
        'registrationFee',
      );
      setPrice(newPrice);
    };
    fetchPrice();
  }, [wevedoService]);

  const handleToken = async token => {
    await updateUser()({ paymentToken: token.id });
    nextStep();
  };

  return (
    <StripeCheckout
      stripeKey={config.publishableKey}
      token={handleToken}
      amount={price * 100} // price should be in cents
      name="Registration Fee"
      email={user.email}
    />
  );
};

const mapStateToProps = ({ userData }) => userData;

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BusinessFormsSignupPayment);
