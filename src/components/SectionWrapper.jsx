import React from 'react';
    import { motion } from 'framer-motion';
    import { cn } from '@/lib/utils';

    const SectionWrapper = ({ children, className, id, title, subtitle }) => {
      return (
        <motion.section
          id={id}
          className={cn('py-16 sm:py-24', className)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {title && (
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            {children}
          </div>
        </motion.section>
      );
    };

    export default SectionWrapper;