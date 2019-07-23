/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import { Form, FormGroup, Button } from 'react-bootstrap';

import '../../../form.scss';

import { updateUser } from '../../../../../actions';
import { FirstStepSignUpBusinessScheme } from '../../../schemas';

const FirstStepSignUpBusinessForm = ({
  isLoggedIn,
  categories: categoryList,
  updateUser,
  history,
  t,
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
        fullname: '',
        categories: '',
        website: '',
      }}
      onSubmit={async ({
        username,
        password,
        fullname,
        categories,
        website,
      }) => {
        const [firstName, lastName] = fullname.split(' ');

        updateUser()({
          username,
          password,
          fullname,
          firstName,
          lastName,
          categories: [categoryList.find(({ name }) => name === categories)],
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
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.usernamePlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
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
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.passwordPlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
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
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.passwordConfirmationPlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
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
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.businessNamePlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              isValid={values.fullname && !errors.fullname}
              isInvalid={touched.fullname && !!errors.fullname}
              autoComplete="new-fullname"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.fullname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formCategory">
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.categoryPlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control first-step__dropdown"
              type="text"
              name="categories"
              as="select"
              value={values.categories}
              onChange={handleChange}
              isValid={values.categories && !errors.categories}
              isInvalid={touched.categories && !!errors.categories}
              autoComplete="new-categories"
            >
              <option disabled />
              {categoryList.map(({ _id: id, name }) => (
                <option key={id}>{name}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.categories}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formWebsite">
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.websitePlaceholder')}
            </Form.Label>
            <Form.Control
              className="form__control"
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
              {t('business-signup.form.nextStepBtn')}
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
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    withTranslation('common'),
  )(FirstStepSignUpBusinessForm),
);
