import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import SectionWrapper from '@/components/SectionWrapper';

    const ProjectsSection = ({ t, projectsList }) => {
      return (
        <SectionWrapper id="projects" title={t('projectsTitle')} subtitle={t('projectsSubtitle')} className="bg-pink-50/30">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsList.map((project, i) => (
              <motion.div
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm flex flex-col">
                  <CardHeader className="items-center text-center pt-6">
                    {project.icon}
                    <CardTitle className="text-xl text-slate-700 mt-2">{t(project.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow flex flex-col justify-center">
                    <p className="text-sm text-slate-600 leading-relaxed">{t(project.descriptionKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      );
    };

    export default ProjectsSection;