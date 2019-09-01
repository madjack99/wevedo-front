import * as Yup from 'yup';

const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
  email: Yup.string()
    .email('invalid email or mobile number')
    .required('required'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'invalid number')
    .required('required'),
  postcode: Yup.string().required('required'),
  address: Yup.string().required('required'),
  country: Yup.string().required('required'),
  regionName: Yup.string().required('required'),
  county: Yup.string().required('required'),
  city: Yup.string().required('required'),
  fullName: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
  website: Yup.string(),
});
