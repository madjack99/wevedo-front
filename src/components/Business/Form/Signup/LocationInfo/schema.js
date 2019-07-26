import * as Yup from 'yup';

const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required!'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'number is not valid')
    .required('phone number is required!'),
  postcode: Yup.string().required('postcode is required'),
  address: Yup.string().required('address is required'),
  regionName: Yup.string().required('town/city is required'),
  country: Yup.string().required('country is required'),
});
