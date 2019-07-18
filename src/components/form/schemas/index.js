import * as Yup from 'yup';

export const signUpUserFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6)
    .required('password is required!'),
});

export const loginUserFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6)
    .required('password is required!'),
});
