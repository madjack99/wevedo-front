import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('username is required'),
  password: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
    .required('confirm password is required'),
  fullName: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('name is required'),
  categories: Yup.string().required('category is required'),
  website: Yup.string().url('enter a valid URL'),
});
