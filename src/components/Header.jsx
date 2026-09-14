import React from 'react';
import { Globe } from 'lucide-react';
import { Button, SiteHeader } from '@/design-system';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = [
	{ nameKey: 'navHome', href: '/#home' },
	{ nameKey: 'navAbout', href: '/#about' },
	{ nameKey: 'navServices', href: '/#services' },
	{ nameKey: 'navProjects', href: '/#projects' },
	{ nameKey: 'navContact', href: '/#contact' },
	{ nameKey: 'navPlayground', href: '/playground' },
];

// App-level wrapper: supplies the portfolio's translated copy to the design
// system's SiteHeader, which holds no copy and reads no context itself.
const Header = () => {
	const { language, toggleLanguage, t } = useLanguage();

	return (
		<SiteHeader
			brand={t('headerTitle')}
			brandHref="#home"
			navItems={navItems.map((item) => ({ label: t(item.nameKey), href: item.href }))}
			actions={
				<Button
					onClick={toggleLanguage}
					variant="ghost"
					size="sm"
					className="flex items-center"
					aria-label="Toggle language"
				>
					<Globe className="h-4 w-4 mr-2" />
					{language === 'en' ? 'ES' : 'EN'}
				</Button>
			}
		/>
	);
};

export default Header;
