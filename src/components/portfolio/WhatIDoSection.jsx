import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import SectionWrapper from '@/components/SectionWrapper';
    import { Lightbulb } from 'lucide-react';

    const WhatIDoSection = ({ t, whatIDoList, whatIDoImages, listItemVariants, openLightbox }) => {
      return (
        <SectionWrapper id="services" title={t('whatIDoTitle')} subtitle={t('whatIDoSubtitle')}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center"><Lightbulb className="mr-3 h-7 w-7 text-secondary" /> {t('whatIDoCardTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('whatIDoParagraph')}</p>
                <ul className="space-y-3">
                  {whatIDoList.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex items-start p-3 bg-sky-50/50 rounded-md"
                    >
                      {item.icon}
                      <span className="text-slate-700">{t(item.textKey)}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4">
              {whatIDoImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="aspect-square bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer"
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