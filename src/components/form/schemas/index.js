import * as Yup from 'yup';

export const signUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6)
    .required('password is required!'),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6)
    .required('password is required!'),
});
