import * as Yup from 'yup';

export const signUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required!'),
  password: Yup.string()
    .min(6)
    .required('Password is required!'),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required!'),
  password: Yup.string()
    .min(6)
    .required('Password is required!'),
});
