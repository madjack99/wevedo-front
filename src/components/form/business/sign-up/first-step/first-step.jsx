import React from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import { Redirect, Link } from 'react-router-dom';

import {
  Form, FormGroup, Button, Dropdown,
} from 'react-bootstrap';

import '../../../form.scss';

import {
  fetchSignUp, fetchLogin, existingEmail,
} from '../../../../../actions';
import { FirstStepSignUpBusinessScheme } from '../../../schemas';

const FirstStepSignUpBusinessForm = ({
  isLoggedIn, error, categories,
}) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      className="form"
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        category: '',
        website: '',
      }}
      onSubmit={async ({
        username, password, confirmPassword, name, category, website,
      }, { setSubmitting }) => {
        setSubmitting(false);

        // save data to redux
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
          <div className="form__error text-center my-3">
            <span>{error}</span>
          </div>
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
              name="confirm-password"
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
              type="text"
              name="category"
              value={values.category}
              onChange={handleChange}
              isValid={values.category && !errors.category}
              isInvalid={touched.category && !!errors.category}
              autoComplete="new-category"
            />
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

          <div className="form__question text-center mt-5">
            <span>
              Already have an account?
              {' '}
              <Link className="text-wevedo" to="/business-login">Login</Link>
            </span>
          </div>
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
  signUp: fetchSignUp(dispatch),
  login: fetchLogin(dispatch),
  statusEmail: error => dispatch(existingEmail(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstStepSignUpBusinessForm);
