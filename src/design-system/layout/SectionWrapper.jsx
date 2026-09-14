import { motion } from 'framer-motion';
import React from 'react';
import { Container } from './Container.jsx';
import { Eyebrow } from '../primitives/Eyebrow.jsx';
import { Heading } from '../primitives/Heading.jsx';
import { cn } from '../lib/utils.js';

/**
 * A full-width page section with m-design's vertical rhythm, an optional
 * centred title block, and the system's scroll-in animation.
 *
 * This is the unit a page is built from: one `SectionWrapper` per section, each
 * with its own `id` so in-page navigation can target it. Give it `number` and
 * `eyebrow` to open the section the way the system does — an oversized magenta
 * numeral above the heading, running in sequence down the page.
 *
 * ```jsx
 * <SectionWrapper
 *   id="services"
 *   number="02"
 *   eyebrow="Qué hago"
 *   title={<>Interactive learning, <span className="text-secondary">end to end.</span></>}
 *   subtitle="From the first storyboard to the SCORM package."
 * >
 *   <div className="grid md:grid-cols-2 gap-8">…</div>
 * </SectionWrapper>
 * ```
 *
 * The fade-and-rise on enter fires once per section and is the only motion
 * m-design applies at the page level.
 *
 * @category Layout
 */
const SectionWrapper = ({ children, className, id, title, subtitle, eyebrow, number }) => (
	<motion.section
		id={id}
		className={cn('py-20 sm:py-28', className)}
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.6, ease: 'easeOut' }}
	>
		<Container>
			{(title || eyebrow || number != null) && (
				<div className="mb-14 max-w-3xl mx-auto text-center">
					{(eyebrow || number != null) && (
						<Eyebrow number={number} className="justify-center mb-4">
							{eyebrow}
						</Eyebrow>
					)}
					{title && <Heading level={2}>{title}</Heading>}
					{subtitle && (
						<p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}
				</div>
			)}
			{children}
		</Container>
	</motion.section>
);
SectionWrapper.displayName = 'SectionWrapper';

export { SectionWrapper };
export default SectionWrapper;
