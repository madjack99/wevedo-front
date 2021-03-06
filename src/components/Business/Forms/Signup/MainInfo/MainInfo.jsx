import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { Formik } from 'formik';
import { withRouter, Redirect } from 'react-router-dom';

import { Form, FormGroup, Button } from 'react-bootstrap';

import { updateUser } from '../../../../../actions';

const BusinessFormsSignupMainInfo = ({
  isLoggedIn,
  categories: categoryList,
  updateUser,
  nextStep,
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
        fullName: '',
        categories: '',
        website: '',
      }}
      onSubmit={async ({
        username,
        password,
        fullName,
        categories,
        website,
      }) => {
        const [firstName, lastName] = fullName.split(' ');

        updateUser()({
          username,
          password,
          fullName,
          firstName,
          lastName,
          categories: [categoryList.find(({ name }) => name === categories)],
          website,
        });

        nextStep();
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .min(6, t('business-signup.form.minimum6chars'))
          .max(50, t('business-signup.form.maximum50chars'))
          .required(t('business-signup.form.required')),
        password: Yup.string()
          .min(8, t('business-signup.form.minimum8chars'))
          .max(50, t('business-signup.form.maximum50chars'))
          .required(t('business-signup.form.required')),
        confirmPassword: Yup.string()
          .oneOf(
            [Yup.ref('password'), null],
            t('business-signup.form.passwordDoesntMatch'),
          )
          .required(t('business-signup.form.required')),
        fullName: Yup.string()
          .min(6, t('business-signup.form.minimum6chars'))
          .max(50, t('business-signup.form.maximum50chars'))
          .required(t('business-signup.form.required')),
        categories: Yup.string().required(t('business-signup.form.required')),
        website: Yup.string(),
      })}
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
              <span className="form__asterisks">*</span>
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
              <span className="form__asterisks">*</span>
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
              <span className="form__asterisks">*</span>
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
              <span className="form__asterisks">*</span>
            </Form.Label>
            <Form.Control
              className="form__control"
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              isValid={values.fullName && !errors.fullName}
              isInvalid={touched.fullName && !!errors.fullName}
              autoComplete="new-fullName"
            />
            <Form.Control.Feedback className="form__feedback" type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formCategory">
            <Form.Label className="form__label mb-0">
              {t('business-signup.form.categoryPlaceholder')}
              <span className="form__asterisks">*</span>
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
              <option value="" disabled />
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
  )(BusinessFormsSignupMainInfo),
);
