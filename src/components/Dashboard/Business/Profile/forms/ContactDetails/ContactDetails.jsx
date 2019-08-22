import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import uniqid from 'uniqid';

import contactDetailsSchema from './contactDetailsSchema';

import countries from '../../../../../../countryLib';

import config from '../../../../../../config';
import '../Forms.scss';

import * as UK from '../../../../../../UK.json';

console.log(UK.default.UK);

const DashboardBusinessProfileFormsContactDetails = ({
  user,
  updateUser,
  updateProfile,
}) => {
  const UKLocations = UK.default.UK;

  const defineCountries = () => {
    return Object.keys(UKLocations);
  };

  const defineRegionNames = country => {
    return Object.keys(UKLocations[country]);
  };

  const defineCounties = (country, regionName) => {
    return Object.keys(UKLocations[country][regionName]);
  };

  const defineCities = (country, regionName, county) => {
    return UKLocations[country][regionName][county];
  };

  const allowSpecificCountries = country => {
    if (defineCountries().includes(country)) {
      return country;
    }
    return '';
  };

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        fullName: user.fullName || '',
        website: user.website || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
        country: allowSpecificCountries(user.country),
        regionName: user.regionName || '',
        county: user.county || '',
        city: user.city || '',
        postcode: user.postcode || '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await updateUser(updateProfile)({
            fullName: values.fullName,
            website: values.website,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: values.address,
            country: values.country,
            regionName: values.regionName,
            county: values.county,
            city: values.city,
            postcode: values.postcode,
          });
          setSubmitting(false);
        } catch (err) {
          console.log(err.message);
          setSubmitting(false);
        }
      }}
      validationSchema={contactDetailsSchema}
    >
      {({ values, handleChange, errors, handleSubmit, isSubmitting }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Row className="p-3">
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Service Name</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.fullName}
                        name="fullName"
                        onChange={handleChange}
                        isValid={values.fullName && !errors.fullName}
                      />
                      {errors.fullName && (
                        <p className="errorMessage">{errors.fullName}</p>
                      )}
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Website Url</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.website}
                        name="website"
                        onChange={handleChange}
                        isValid={values.website && !errors.website}
                      />
                      {errors.website && (
                        <p className="errorMessage">{errors.website}</p>
                      )}
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Email Address</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        isValid={values.email && !errors.email}
                      />
                      {errors.email && (
                        <p className="errorMessage">{errors.email}</p>
                      )}
                    </Col>
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">Mobile Number</p>
                      <Form.Control
                        className=" form__control__account "
                        value={values.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                        isValid={values.phoneNumber && !errors.phoneNumber}
                      />
                      {errors.phoneNumber && (
                        <p className="errorMessage">{errors.phoneNumber}</p>
                      )}
                    </Col>
                  </Row>
                  <Col className="mb-4">
                    <p className="text-muted">Address</p>
                    <Row className="mb-sm-3">
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.country}
                          name="country"
                          as="select"
                          onChange={e => {
                            handleChange(e);
                            values.regionName = '';
                            values.county = '';
                            values.city = '';
                          }}
                          isValid={values.country && !errors.country}
                        >
                          <option value="" disabled />
                          {defineCountries().map(country => (
                            <option key={uniqid()}>{country}</option>
                          ))}
                        </Form.Control>
                        {values.country === '' ? (
                          <p className="errorMessage">
                            Choose a country from the list
                          </p>
                        ) : null}
                        {errors.country && (
                          <p className="errorMessage">{errors.country}</p>
                        )}
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.regionName}
                          name="regionName"
                          as="select"
                          onChange={e => {
                            handleChange(e);
                            values.county = '';
                            values.city = '';
                          }}
                          isValid={values.regionName && !errors.regionName}
                        >
                          <option value="" disabled />
                          {values.country &&
                            defineRegionNames(values.country).map(
                              regionName => (
                                <option key={uniqid()}>{regionName}</option>
                              ),
                            )}
                        </Form.Control>
                        {errors.regionName && (
                          <p className="errorMessage">{errors.regionName}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.county}
                          name="county"
                          as="select"
                          onChange={e => {
                            handleChange(e);
                            values.city = '';
                          }}
                          isValid={values.county && !errors.county}
                        >
                          <option value="" disabled />
                          {values.country &&
                            values.regionName &&
                            defineCounties(
                              values.country,
                              values.regionName,
                            ).map(county => (
                              <option key={uniqid()}>{county}</option>
                            ))}
                        </Form.Control>
                        {errors.county && (
                          <p className="errorMessage">{errors.county}</p>
                        )}
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.city}
                          name="city"
                          as="select"
                          onChange={handleChange}
                          isValid={values.city && !errors.city}
                        >
                          <option value="" disabled />
                          {values.country &&
                            values.county &&
                            defineCities(
                              values.country,
                              values.regionName,
                              values.county,
                            ).map(city => (
                              <option key={uniqid()}>{city}</option>
                            ))}
                        </Form.Control>
                        {errors.city && (
                          <p className="errorMessage">{errors.city}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={5} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.address}
                          name="address"
                          onChange={handleChange}
                          isValid={values.address && !errors.address}
                        />
                        {errors.address && (
                          <p className="errorMessage">{errors.address}</p>
                        )}
                      </Col>

                      <Col sm={3} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.postcode}
                          name="postcode"
                          onChange={handleChange}
                          isValid={values.postcode && !errors.postcode}
                        />
                        {errors.postcode && (
                          <p className="errorMessage">{errors.postcode}</p>
                        )}
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="text-uppercase mt-2 mb-4">
                    <Button size="lg" type="submit" disabled={isSubmitting}>
                      Save
                    </Button>
                  </Col>
                </div>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DashboardBusinessProfileFormsContactDetails;
