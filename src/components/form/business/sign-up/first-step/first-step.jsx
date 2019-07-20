/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import {
  Form, FormGroup, Button,
} from 'react-bootstrap';

import '../../../form.scss';

import { updateUser } from '../../../../../actions';
import { FirstStepSignUpBusinessScheme } from '../../../schemas';

const FirstStepSignUpBusinessForm = ({
  isLoggedIn, categories, updateUser, history,
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form"
      initialValues={{
        username: 'RukkiesMan',
        password: '123456',
        confirmPassword: '123456',
        name: 'PavelCo',
        category: 'Media',
        website: 'https://pavel.co',
      }}
      onSubmit={async ({
        username, password, name, category, website,
      }, { setSubmitting }) => {
        setSubmitting(false);

        updateUser()({
          username,
          password,
          name,
          category,
          website,
        });

        history.push('/business-signup-2');
      }}
      validationSchema={FirstStepSignUpBusinessScheme}
      render={({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-5" controlId="formUsername">
            <Form.Label className="form__label mb-0">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              isValid={values.username && !errors.username}
              isInvalid={touched.username && !!errors.username}
              autoComplete="new-username"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formPassword">
            <Form.Label className="form__label mb-0">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={values.password && !errors.password}
              isInvalid={touched.password && !!errors.password}
              autoComplete="new-password"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formConfirmPassword">
            <Form.Label className="form__label mb-0">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              isValid={values.confirmPassword && !errors.confirmPassword}
              isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              autoComplete="new-password"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formName">
            <Form.Label className="form__label mb-0">Business Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isValid={values.name && !errors.name}
              isInvalid={touched.name && !!errors.name}
              autoComplete="new-name"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formCategory">
            <Form.Label className="form__label mb-0">Select Category</Form.Label>
            <Form.Control
              className="first-step__dropdown"
              type="text"
              name="category"
              as="select"
              value={values.category}
              onChange={handleChange}
              isValid={values.category && !errors.category}
              isInvalid={touched.category && !!errors.category}
              autoComplete="new-category"
            >
              <option disabled />
              {
                categories.map(({ _id: id, name }) => (
                  <option key={id}>{name}</option>
                ))
              }
            </Form.Control>
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formWebsite">
            <Form.Label className="form__label mb-0">Business Website</Form.Label>
            <Form.Control
              type="url"
              name="website"
              value={values.website}
              onChange={handleChange}
              isValid={values.website && !errors.website}
              isInvalid={touched.website && !!errors.website}
              autoComplete="new-website"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.website}
            </Form.Control.Feedback>
          </Form.Group>

          <FormGroup className="text-center text-uppercase">
            <Button
              className="mt-4"
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              Next step
            </Button>
          </FormGroup>
        </Form>
      )}
    />
  );
};

const mapStateToProps = ({ sessionData, categoryList }) => ({
  ...sessionData,
  ...categoryList,
});

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    FirstStepSignUpBusinessForm,
  ),
);
