import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email')
    .required('Email is required'),
});
