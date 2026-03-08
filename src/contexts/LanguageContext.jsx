import React, { createContext, useState, useContext, useCallback } from 'react';
    import translations from '@/lib/translations';

    const LanguageContext = createContext();

    export const LanguageProvider = ({ children }) => {
      const [language, setLanguage] = useState('en');

      const toggleLanguage = useCallback(() => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
      }, []);

      const t = useCallback((key) => {
        return translations[language][key] || translations['en'][key] || key;
      }, [language]);

      return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
          {children}
        </LanguageContext.Provider>
      );
    };

    export const useLanguage = () => {
      const context = useContext(LanguageContext);
      if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
      }
      return context;
    };