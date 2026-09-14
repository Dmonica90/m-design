import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import SectionWrapper from '@/components/SectionWrapper';

    const AboutSection = ({ t, paragraphStyle }) => {
      return (
        <SectionWrapper id="about" number="01" title={t('aboutTitle')}>
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2 p-6 sm:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl text-primary">{t('aboutCardTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className={paragraphStyle}>{t('aboutParagraph1')}</p>
                  <p className={paragraphStyle}>{t('aboutParagraph2')}</p>
                  <p className={paragraphStyle}>{t('aboutParagraph3')}</p>
                  <h3 className="text-xl font-semibold text-muted-foreground mt-6 mb-2">{t('aboutVisualStyleTitle')}</h3>
                  <p className={paragraphStyle}>{t('aboutVisualStyleParagraph')}</p>
                </CardContent>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 flex flex-col justify-center items-center">
                <div className="w-full aspect-square max-w-md bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img alt="Monica 'Monick' Vázquez, smiling, with colorful hair and glasses" className="w-full h-full object-cover" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/a5961ee60f717235be61454056acd80e.jpg" />
                </div>
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                   <img alt="Laptop on a desk, symbolizing eLearning development workspace" className="w-full h-full object-cover rounded-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3913c9f8-cff2-4084-a914-b4e290044ff2/b4c3f9d14661cdfedc10756ca4f22d11.jpg" />
                </div>
              </div>
            </div>
          </Card>
        </SectionWrapper>
      );
    };

    export default AboutSection;