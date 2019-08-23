import React from 'react';

import { Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import schema from './schema';
import '../Forms.scss';

const DashboardBusinessProfileFormsVideoUpload = ({ user, updateUser }) => {
  return (
    <Formik
      className="form"
      enableReinitialize
      initialValues={{
        profileVideoURL: user.profileVideoURL || '',
      }}
      validationSchema={schema}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Col>
                <div className="dashboard-business__profile__whitebox">
                  <Col sm={12}>
                    <Form.Group>
                      <p className="text-muted">Add a Video</p>
                      <Form.Control
                        name="profileVideoURL"
                        value={values.profileVideoURL}
                        className=" form__control__account "
                        onChange={handleChange}
                        onBlur={() =>
                          updateUser()({
                            profileVideoURL: values.profileVideoURL,
                          })
                        }
                        isValid={
                          values.profileVideoURL && !errors.profileVideoURL
                        }
                        placeholder="Enter video URL"
                      />
                      {errors.profileVideoURL && (
                        <p className="errorMessage">{errors.profileVideoURL}</p>
                      )}
                    </Form.Group>
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

export default DashboardBusinessProfileFormsVideoUpload;
