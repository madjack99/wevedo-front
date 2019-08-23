import React from 'react';

import { Formik } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';

import contactDetailsSchema from './contactDetailsSchema';

import countries from '../../../../../../countryLib';

import config from '../../../../../../config';
import '../Forms.scss';

const DashboardBusinessProfileFormsContactDetails = ({ user, updateUser }) => {
  const defineListOfCities = countryName => {
    const listOfCountries = Object.values(countries);
    const country = listOfCountries.filter(
      module => module.default.name === countryName,
    );
    return country[0].default.provinces;
  };

  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        fullName: user.fullName || '',
        website: user.website || 'No website',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
        regionName: user.regionName || '',
        country: user.country || '',
        postcode: user.postcode || '',
      }}
      validationSchema={contactDetailsSchema}
    >
      {({ values, handleChange, errors, handleSubmit }) => {
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
                        onBlur={() =>
                          updateUser()({
                            fullName: values.fullName,
                          })
                        }
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
                        onBlur={() =>
                          updateUser()({
                            website: values.website,
                          })
                        }
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
                        onBlur={() =>
                          updateUser()({
                            email: values.email,
                          })
                        }
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
                        onBlur={() =>
                          updateUser()({
                            phoneNumber: values.phoneNumber,
                          })
                        }
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
                      <Col sm={5} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.address}
                          name="address"
                          onChange={handleChange}
                          onBlur={() =>
                            updateUser()({
                              address: values.address,
                            })
                          }
                          isValid={values.address && !errors.address}
                        />
                        {errors.address && (
                          <p className="errorMessage">{errors.address}</p>
                        )}
                      </Col>

                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          name="country"
                          as="select"
                          onChange={handleChange}
                          onBlur={() =>
                            updateUser()({
                              country: values.country,
                            })
                          }
                          isValid={values.country && !errors.country}
                        >
                          <option>{values.country}</option>
                          {config.allowedInCountries.map((country, index) => (
                            <option key={index}>
                              {countries[country].default.name}
                            </option>
                          ))}
                        </Form.Control>
                        {errors.country && (
                          <p className="errorMessage">{errors.country}</p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.regionName}
                          name="regionName"
                          as="select"
                          onChange={handleChange}
                          onBlur={() =>
                            updateUser()({
                              regionName: values.regionName,
                            })
                          }
                          isValid={values.regionName && !errors.regionName}
                        >
                          <option>{values.regionName}</option>
                          {values.country &&
                            defineListOfCities(values.country).map(
                              (city, index) => (
                                <option key={index}>{city}</option>
                              ),
                            )}
                        </Form.Control>
                        {errors.regionName && (
                          <p className="errorMessage">{errors.regionName}</p>
                        )}
                      </Col>
                      <Col sm={3} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.postcode}
                          name="postcode"
                          onChange={handleChange}
                          onBlur={() =>
                            updateUser()({
                              postcode: values.postcode,
                            })
                          }
                          isValid={values.postcode && !errors.postcode}
                        />
                        {errors.postcode && (
                          <p className="errorMessage">{errors.postcode}</p>
                        )}
                      </Col>
                    </Row>
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
