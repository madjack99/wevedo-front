import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
  password: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'passwords does not match')
    .required('required'),
  fullName: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
  categories: Yup.string().required('required'),
  website: Yup.string(),
});
