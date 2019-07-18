import * as Yup from 'yup';

export const userFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
});

export const loginUserFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
});
