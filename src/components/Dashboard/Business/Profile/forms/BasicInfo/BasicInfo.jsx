import React from 'react';
import { Formik } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';
import basicInfoSchema from './basicInfoSchema';
import '../Forms.scss';

const DashboardBusinessProfileFormsBasicInfo = ({ user, updateUser }) => {
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
      validationSchema={basicInfoSchema}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
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
                        onBlur={() =>
                          updateUser()({
                            bio: values.bio,
                          })
                        }
                        isValid={values.bio && !errors.bio}
                      />
                      {errors.bio && (
                        <p className="errorMessage">{errors.bio}</p>
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
                          onBlur={() =>
                            updateUser()({
                              minPrice: values.minPrice,
                            })
                          }
                          isValid={values.minPrice && !errors.minPrice}
                        />
                        {errors.minPrice && (
                          <p className="errorMessage">{errors.minPrice}</p>
                        )}
                      </Col>
                      <Col sm={4}>
                        <Form.Control
                          name="maxPrice"
                          value={values.maxPrice}
                          className=" form__control__account "
                          onChange={handleChange}
                          onBlur={() =>
                            updateUser()({
                              maxPrice: values.maxPrice,
                            })
                          }
                          isValid={values.maxPrice && !errors.maxPrice}
                        />
                        {errors.maxPrice && (
                          <p className="errorMessage">{errors.maxPrice}</p>
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
                      onBlur={() =>
                        updateUser()({
                          facilities: values.facilities,
                        })
                      }
                      isValid={values.facilities && !errors.facilities}
                    />
                    {errors.facilities && (
                      <p className="errorMessage">{errors.facilities}</p>
                    )}
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

export default DashboardBusinessProfileFormsBasicInfo;
