import React from 'react';
import { SiteFooter } from '@/design-system';
import { useLanguage } from '@/contexts/LanguageContext';

// App-level wrapper: supplies the portfolio's translated copy to the design
// system's SiteFooter, which holds no copy and reads no context itself.
const Footer = () => {
	const { t } = useLanguage();

	return <SiteFooter>{t('footerText')}</SiteFooter>;
};

export default Footer;
