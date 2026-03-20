import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Menu, X, Globe } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useLanguage } from '@/contexts/LanguageContext';

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const { language, toggleLanguage, t } = useLanguage();

     const navItems = [

  { nameKey: 'navHome', href: '/#home' },
  { nameKey: 'navAbout', href: '/#about' },
  { nameKey: 'navServices', href: '/#services' },
  { nameKey: 'navProjects', href: '/#projects' },
  { nameKey: 'navContact', href: '/#contact' },
  { nameKey: 'navPlayground', href: '/playground' },
];

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const toggleMenu = () => setIsOpen(!isOpen);

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || isOpen ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a href="#home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                {t('headerTitle')}
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.nameKey}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {t(item.nameKey)}
                  </a>
                ))}
                <Button onClick={toggleLanguage} variant="ghost" size="sm" className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'ES' : 'EN'}
                </Button>
              </nav>
              <div className="md:hidden flex items-center">
                 <Button onClick={toggleLanguage} variant="ghost" size="icon" className="mr-2">
                    <Globe className="h-5 w-5" />
                  </Button>
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 shadow-lg"
            >
              <nav className="flex flex-col items-center space-y-4 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.nameKey}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {t(item.nameKey)}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </motion.header>
      );
    };

    export default Header;