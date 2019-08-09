import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import basicInfoSchema from './basicInfoSchema';

const BasicInfoForm = ({ user, updateUser, updateProfile }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        bio: user.bio || '',
        minPrice: user.minPrice || '',
        maxPrice: user.maxPrice || '',
        facilities: user.facilities || '',
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        try {
          updateUser(updateProfile)({
            bio: values.bio,
            minPrice: values.minPrice,
            maxPrice: values.maxPrice,
            facilities: values.facilities,
          });
          setSubmitting(false);
        } catch (err) {
          console.log(err.message);
          setSubmitting(false);
        }
      }}
      validationSchema={basicInfoSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        errors,
      }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-5">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Col sm={12} className="mb-4">
                    <Form.Group>
                      <p className="text-muted">Description</p>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        name="bio"
                        value={values.bio}
                        className=" form__control__account "
                        onChange={handleChange}
                        isValid={values.bio && !errors.bio}
                      />
                      {errors.bio && (
                        <p style={{ color: '#dc3545' }}>{errors.bio}</p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Pricing</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control
                          name="minPrice"
                          value={values.minPrice}
                          className=" form__control__account "
                          onChange={handleChange}
                          isValid={values.minPrice && !errors.minPrice}
                        />
                        {errors.minPrice && (
                          <p style={{ color: '#dc3545' }}>{errors.minPrice}</p>
                        )}
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          name="maxPrice"
                          value={values.maxPrice}
                          className=" form__control__account "
                          onChange={handleChange}
                          isValid={values.maxPrice && !errors.maxPrice}
                        />
                        {errors.maxPrice && (
                          <p style={{ color: '#dc3545' }}>{errors.maxPrice}</p>
                        )}
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4 d-none">
                    <p className="text-muted">Guests Capacity</p>
                    <Row>
                      <Col sm={4} className="mb-2 mb-sm-0">
                        <Form.Control
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          className=" form__control__account "
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} className="mb-4">
                    <p className="text-muted">Facilities</p>
                    <Form.Control
                      name="facilities"
                      value={values.facilities}
                      className=" form__control__account "
                      onChange={handleChange}
                      isValid={values.facilities && !errors.facilities}
                    />
                    {errors.facilities && (
                      <p style={{ color: '#dc3545' }}>{errors.facilities}</p>
                    )}
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

export default BasicInfoForm;
