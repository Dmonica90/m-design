import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { Play, Sparkles } from 'lucide-react';

const PlaygroundSection = ({ t, challengesList }) => {
  return (
    // Usamos un gradiente sutil con los colores de gamificación (rosa a amarillo) para diferenciar la sección
    <SectionWrapper 
      id="playground" 
      title={t('playgroundTitle')} 
      subtitle={t('playgroundSubtitle')} 
      className="bg-gradient-to-br from-pink-50 to-amber-50/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challengesList.map((challenge, i) => (
          <motion.div
            key={i}
            custom={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            // Animación ligera en hover y feedback visual inmediato
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col">
              
              {/* Imagen/Thumbnail del Reto */}
              {/* Imagen/Thumbnail del Reto - ¡Ahora toda el área es un botón! */}
              <a 
                href={challenge.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-video w-full bg-slate-200 overflow-hidden relative group block cursor-pointer"
              >
                <img 
                  src={challenge.thumbnail} 
                  alt={t(challenge.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay con botón Play para microinteracción inmediata */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* Le ponemos pointer-events-none para que el clic pase directo al enlace <a> */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-md pointer-events-none">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </div>
              </a>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                    #ElearningChallenge
                  </span>
                  <Sparkles className="h-4 w-4 text-pink-400" />
                </div>
                <CardTitle className="text-lg text-slate-800 leading-tight">
                  {t(challenge.titleKey)}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {t(challenge.descKey)}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5 text-primary rounded-xl"
                  asChild
                >
                  <a href={challenge.demoLink} target="_blank" rel="noopener noreferrer">
                    {t('playgroundBtnPlay')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PlaygroundSection;