import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from '@/components/SectionWrapper';
import { Mail, Linkedin } from 'lucide-react'; // <--- Importamos Linkedin aquí

const ContactSection = ({ t }) => {
  return (
    <SectionWrapper id="contact" title={t('contactTitle')} subtitle={t('contactSubtitle')}>
      <Card className="max-w-lg mx-auto shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8">
        <CardContent className="text-center space-y-6">
          <p className="text-slate-600 leading-relaxed">{t('contactParagraph')}</p>
          <div className="space-y-4">
            
            {/* 1. Botón de WhatsApp */}
            <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href="https://wa.me/525631864638" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2.9A11.95 11.95 0 0 0 8.5 1.7a12.06 12.06 0 0 0-6.8 6.8A11.95 11.95 0 0 0 2.9 14.05"></path></svg>
                {t('contactWhatsApp')}
              </a>
            </Button>

            {/* 2. NUEVO: Botón de LinkedIn */}
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
              {/* IMPORTANTE: ¡Cambia este enlace por el link real de tu perfil de LinkedIn! */}
              <a href="https://www.linkedin.com/in/mvrldesign" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                {t('contactLinkedIn')}
              </a>
            </Button>

            {/* 3. Botón de Email */}
            <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10" asChild>
              <a href="mailto:dominica.vrl@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                {t('contactEmail')}
              </a>
            </Button>

          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default ContactSection;