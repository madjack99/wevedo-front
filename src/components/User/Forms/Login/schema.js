import * as Yup from 'yup';

export default Yup.object().shape({
  emailPhone: Yup.string()
    .test('emailPhone', 'invalid email or mobile number', value => {
      const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

      if (!emailRegex.test(value) && !phoneRegex.test(value)) {
        return false;
      }
      return true;
    })
    .required('email or mobile number is required!'),
  password: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
});
