import * as Yup from 'yup';

export default Yup.object().shape({
  fullName: Yup.string()
    .min(6, 'At least 6 symbols')
    .max(50, 'Maximum 50 characters')
    .required('Enter valid name'),
});
