import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import * as Yup from 'yup';

import { Formik } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';

import '../Forms.scss';

import config from '../../../../../../config';

import {
  getCountries,
  getRegionNames,
  getCounties,
  getCities,
} from '../../../../../../helpers';

const DashboardBusinessProfileFormsContactDetails = ({
  user,
  updateUser,
  t,
}) => {
  const { allowedInCountries } = config;
  const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
        country: user.country || '',
        regionName: user.regionName || '',
        county: user.county || '',
        city: user.city || '',
        postcode: user.postcode || '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('dashboard.profile.invalidEmailOrMobileNumber'))
          .required(t('dashboard.profile.required')),
        phoneNumber: Yup.string()
          .matches(phoneRegex, 'invalid number')
          .required(t('dashboard.profile.required')),
        postcode: Yup.string().required(t('dashboard.profile.required')),
        address: Yup.string().required(t('dashboard.profile.required')),
        country: Yup.string().required(t('dashboard.profile.required')),
        regionName: Yup.string().required(t('dashboard.profile.required')),
        county: Yup.string().required(t('dashboard.profile.required')),
        city: Yup.string().required(t('dashboard.profile.required')),
        fullName: Yup.string()
          .min(6, t('dashboard.profile.minimum6chars'))
          .max(50, t('dashboard.profile.maximum50chars'))
          .required(t('dashboard.profile.required')),
        website: Yup.string(),
      })}
    >
      {({ values, handleChange, errors, handleSubmit }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Row className="p-3">
                    <Col sm={6} className="mb-4">
                      <p className="text-muted">
                        {t('signAndLogForm.serviceName')}
                        <span className="form__asterisks">*</span>
                      </p>
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
                      <p className="text-muted">
                        {t('dashboard.profile.websiteUrl')}
                      </p>
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
                      <p className="text-muted">
                        {t('signAndLogForm.emailAndPhoneNumberLabel')}
                        <span className="form__asterisks">*</span>
                      </p>
                      <Form.Control
                        className=" form__control__account "
                        disabled
                        value={values.email}
                        name="email"
                        placeholder={t('signAndLogForm.countryCodeLabel')}
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
                      <p className="text-muted">
                        {t('signAndLogForm.mobileNumber')}
                        <span className="form__asterisks">*</span>
                      </p>
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
                    <p className="text-muted">
                      {t('signAndLogForm.address')}
                      <span className="form__asterisks">*</span>
                    </p>
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
                            updateUser()({
                              regionName: '',
                              county: '',
                              city: '',
                            });
                          }}
                          onBlur={() =>
                            updateUser()({
                              country: values.country,
                            })
                          }
                          isValid={values.country && !errors.country}
                        >
                          <option value="" disabled>
                            {values.country}
                          </option>
                          {getCountries(allowedInCountries).map(country => (
                            <option key={uniqid()}>{country}</option>
                          ))}
                        </Form.Control>
                        {values.country === '' ? (
                          <p className="errorMessage">
                            {t('signAndLogForm.chooseCountry')}
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
                            updateUser()({
                              county: '',
                              city: '',
                            });
                          }}
                          onBlur={() =>
                            updateUser()({
                              regionName: values.regionName,
                            })
                          }
                          isValid={values.regionName && !errors.regionName}
                        >
                          <option value="" disabled />
                          {values.country &&
                            getRegionNames(values.country).map(regionName => (
                              <option key={uniqid()}>{regionName}</option>
                            ))}
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
                            updateUser()({
                              city: '',
                            });
                          }}
                          onBlur={() =>
                            updateUser()({
                              county: values.county,
                            })
                          }
                          isValid={values.county && !errors.county}
                        >
                          <option value="" disabled />
                          {values.country &&
                            values.regionName &&
                            getCounties(values.country, values.regionName).map(
                              county => (
                                <option key={uniqid()}>{county}</option>
                              ),
                            )}
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
                          onBlur={() =>
                            updateUser()({
                              city: values.city,
                            })
                          }
                          isValid={values.city && !errors.city}
                        >
                          <option value="" disabled />
                          {values.country &&
                            values.county &&
                            getCities(
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

const mapStateToProps = ({ userData }) => userData;

export default compose(
  connect(mapStateToProps),
  withTranslation('common'),
)(DashboardBusinessProfileFormsContactDetails);
