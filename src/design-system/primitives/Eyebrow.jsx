import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const numberVariants = cva('font-extrabold leading-none tracking-tight', {
	variants: {
		size: { sm: 'text-2xl', md: 'text-4xl', lg: 'text-6xl' },
		tone: {
			secondary: 'text-secondary',
			primary: 'text-primary',
			tertiary: 'text-tertiary',
			onDeep: 'text-surface-deep-foreground',
		},
	},
	defaultVariants: { size: 'md', tone: 'secondary' },
});

const labelVariants = cva('uppercase tracking-[0.18em] font-semibold text-xs', {
	variants: {
		tone: {
			secondary: 'text-secondary',
			primary: 'text-primary',
			tertiary: 'text-tertiary',
			muted: 'text-muted-foreground',
			onDeep: 'text-surface-deep-foreground/70',
		},
	},
	defaultVariants: { tone: 'muted' },
});

/**
 * The label that opens a section: an optional oversized number beside a short
 * uppercase, letterspaced caption.
 *
 * This is m-design's section marker — it sits above the `Heading`, numbers the
 * section, and is the main place the magenta accent appears. Use it once at the
 * top of each major section, with the numbers running in sequence down the page.
 *
 * ```jsx
 * <Eyebrow number="01">El problema</Eyebrow>
 * <Heading level={2}>Seguimos diseñando cursos, no experiencias.</Heading>
 * ```
 *
 * Drop `number` when a section is not part of a numbered run. Inside a
 * `Statement` or any `surface-deep` section, pass `tone="onDeep"`.
 *
 * @category Primitives
 */
const Eyebrow = React.forwardRef(
	({ className, number, children, size, tone, labelTone, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-baseline gap-4', className)} {...props}>
			{number != null && (
				<span className={numberVariants({ size, tone })}>{number}</span>
			)}
			{children && (
				<span className={labelVariants({ tone: labelTone ?? (tone === 'onDeep' ? 'onDeep' : 'muted') })}>
					{children}
				</span>
			)}
		</div>
	),
);
Eyebrow.displayName = 'Eyebrow';

export { Eyebrow, numberVariants as eyebrowNumberVariants, labelVariants as eyebrowLabelVariants };
