import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard, SectionWrapper } from '@/design-system';

// Tones rotate across the grid so colour arrives through the cards rather than
// through any one loud element — the reference's way of colouring a page.
const TONES = ['primary', 'secondary', 'tertiary'];

const ProjectsSection = ({ t, projectsList }) => (
  <SectionWrapper
    id="projects"
    number="03"
    title={t('projectsTitle')}
    subtitle={t('projectsSubtitle')}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsList.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <FeatureCard
            tone={TONES[i % TONES.length]}
            icon={project.icon}
            title={t(project.titleKey)}
            className="h-full"
          >
            {t(project.descriptionKey)}
          </FeatureCard>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
