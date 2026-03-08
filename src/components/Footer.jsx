import React from 'react';
    import { useLanguage } from '@/contexts/LanguageContext';

    const Footer = () => {
      const { t } = useLanguage();

      return (
        <footer className="py-8 text-center bg-background/80 backdrop-blur-sm shadow-inner">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground">
              {t('footerText')}
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;