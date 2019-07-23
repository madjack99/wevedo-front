import React from 'react';
import { withTranslation } from 'react-i18next';

const WeddingTools = ({ t }) => <h1 style={{ margin: '150px' }}>{t('weddingTools.title')}</h1>;

export default withTranslation('common')(WeddingTools);
