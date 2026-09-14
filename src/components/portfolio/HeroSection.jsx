import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight } from 'lucide-react';

    const HeroSection = ({ t, userImageURL }) => {
      return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20 bg-gradient-to-br from-sky-100 via-pink-50 to-rose-100">
          <div className="absolute inset-0 opacity-30">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full filter blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/30 rounded-lg filter blur-2xl"
              animate={{ scale: [1, 1.3, 1], x: [0, 20, -20, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mb-6"
            >
              <img 
                src={userImageURL} 
                alt={t('heroName')}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </motion.div>
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 text-primary"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {t('heroName')}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <a href="#contact">{t('heroCta')} <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default HeroSection;