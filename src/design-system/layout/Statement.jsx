import { motion } from 'framer-motion';
import React from 'react';
import { Container } from './Container.jsx';
import { cn } from '../lib/utils.js';

/**
 * A full-bleed section on the navy ground, for the one line a page is really
 * about.
 *
 * `Statement` is m-design's counterweight: the light pages carry the argument,
 * and every so often the page goes dark and says one thing very loudly. Use it
 * for chapter openers, manifesto lines and closing calls to action — sparingly,
 * or it stops landing.
 *
 * Everything inside inherits light-on-dark, so pass `tone="onDeep"` to any
 * `Heading`, `Text` or `Eyebrow` you nest here.
 *
 * ```jsx
 * <Statement id="method">
 *   <Eyebrow number="04" tone="onDeep">La fase 1</Eyebrow>
 *   <Heading level={1} tone="onDeep">
 *     Stop designing courses.{' '}
 *     <span className="text-secondary">Start crafting experiences.</span>
 *   </Heading>
 * </Statement>
 * ```
 *
 * @category Layout
 */
const Statement = ({ children, className, id, align = 'left' }) => (
	<motion.section
		id={id}
		className={cn(
			'bg-surface-deep text-surface-deep-foreground py-20 sm:py-28',
			className,
		)}
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.6, ease: 'easeOut' }}
	>
		<Container>
			<div
				className={cn(
					'space-y-6 max-w-4xl',
					align === 'center' && 'mx-auto text-center',
				)}
			>
				{children}
			</div>
		</Container>
	</motion.section>
);
Statement.displayName = 'Statement';

export { Statement };
