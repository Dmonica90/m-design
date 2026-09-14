import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardContent, CardHeader, CardTitle, NumberedList, NumberedListItem, SectionWrapper } from '@/design-system';
import { Lightbulb, ArrowRight } from 'lucide-react'; // <--- IMPORTAMOS LA FLECHITA

const WhatIDoSection = ({ t, whatIDoList, whatIDoImages, listItemVariants, openLightbox }) => {
  return (
    <SectionWrapper
      id="services"
      number="02"
      title={t('whatIDoTitle')}
      subtitle={t('whatIDoSubtitle')}
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card tone="primary">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-3 h-7 w-7 text-secondary" /> 
              {t('whatIDoCardTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t('whatIDoParagraph')}</p>
            <NumberedList className="mb-8">
              {whatIDoList.map((item, i) => (
                <NumberedListItem key={i} title={t(item.textKey)} />
              ))}
            </NumberedList>
            
            {/* NUEVO BOTÓN DE ENLACE AL PLAYGROUND */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl"
                asChild
              >
                <a href="/playground">
                  {t('whatIDoBtnPlayground')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-4">
          {whatIDoImages.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-muted rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => openLightbox(image.src)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIDoSection;