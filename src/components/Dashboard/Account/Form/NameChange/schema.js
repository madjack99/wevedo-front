import * as Yup from 'yup';
import i18next from 'i18next';

export default Yup.object().shape({
  fullName: Yup.string()
    .min(6, i18next.t('en.common:dashboard.account.minimum6chars'))
    .max(50, 'maximum 50 characters')
    .required(i18next.t('dashboard.account.enterAValidName')),
});
