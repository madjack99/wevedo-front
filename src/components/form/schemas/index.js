import * as Yup from 'yup';

const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userFormSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  password: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
});

export const FirstStepSignUpBusinessScheme = Yup.object().shape({
  username: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('username is required'),
  password: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
    .required('confirm password is required'),
  name: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('name is required'),
  category: Yup.string()
    .required('category is required'),
  website: Yup.string()
    .url('enter a valid URL')
    .required('website is required'),
});

export const SecondStepSignUpBusinessScheme = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'number is not valid')
    .required('phone number is required!'),
  postcode: Yup.string()
    .required('postcode is required'),
  address: Yup.string()
    .required('address is required'),
  townOrCity: Yup.string()
    .required('town/city is required'),
  country: Yup.string()
    .required('country is required'),
});
