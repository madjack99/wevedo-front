import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';

import contactDetailsSchema from './contactDetailsSchema';

const DashboardBusinessProfileFormsContactDetails = ({
  user,
  updateUser,
  updateProfile,
}) => {
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
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await updateUser(updateProfile)({
            fullName: values.fullName,
            website: values.website,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: values.address,
            regionName: values.regionName,
            country: values.country,
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
                        <p style={{ color: '#dc3545' }}>{errors.fullName}</p>
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
                        <p style={{ color: '#dc3545' }}>{errors.website}</p>
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
                        <p style={{ color: '#dc3545' }}>{errors.email}</p>
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
                        <p style={{ color: '#dc3545' }}>{errors.phoneNumber}</p>
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
                          isValid={values.address && !errors.address}
                        />
                        {errors.address && (
                          <p style={{ color: '#dc3545' }}>{errors.address}</p>
                        )}
                      </Col>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.regionName}
                          name="regionName"
                          onChange={handleChange}
                          isValid={values.regionName && !errors.regionName}
                        />
                        {errors.regionName && (
                          <p style={{ color: '#dc3545' }}>
                            {errors.regionName}
                          </p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="mb-2">
                        <Form.Control
                          className=" form__control__account "
                          value={values.country}
                          name="country"
                          onChange={handleChange}
                          isValid={values.country && !errors.country}
                        />
                        {errors.country && (
                          <p style={{ color: '#dc3545' }}>{errors.country}</p>
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
                          <p style={{ color: '#dc3545' }}>{errors.postcode}</p>
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
