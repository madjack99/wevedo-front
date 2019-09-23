import * as Yup from 'yup';

export default Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'minimum 8 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
});
