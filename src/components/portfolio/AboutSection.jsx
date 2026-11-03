import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import SectionWrapper from '@/components/SectionWrapper';

    const AboutSection = ({ t, paragraphStyle }) => {
      return (
        <SectionWrapper id="about" title={t('aboutTitle')} className="bg-slate-50">
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
                  <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-2">{t('aboutVisualStyleTitle')}</h3>
                  <p className={paragraphStyle}>{t('aboutVisualStyleParagraph')}</p>
                </CardContent>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-sky-100 to-pink-100 p-6 sm:p-8 flex flex-col justify-center items-center">
                <div className="w-full aspect-square max-w-md bg-slate-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img alt="Monica 'Monick' Vázquez character sheet, illustrated with blue hair and glasses" className="w-full h-full object-cover" src="/images/portfolio/monica-character-sheet.jpg" />
                </div>
                <div className="w-full aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                   <img alt="Day One course running on a laptop on a desk" className="w-full h-full object-cover rounded-lg" src="/images/portfolio/dayone-laptop.jpg" />
                </div>
              </div>
            </div>
          </Card>
        </SectionWrapper>
      );
    };

    export default AboutSection;