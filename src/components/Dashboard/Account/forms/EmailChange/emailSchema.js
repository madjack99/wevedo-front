import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('enter valid email')
    .required('email is required'),
});
