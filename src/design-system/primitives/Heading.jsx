import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const headingVariants = cva('font-bold tracking-tight leading-[1.1]', {
	variants: {
		level: {
			1: 'text-5xl sm:text-7xl font-extrabold',
			2: 'text-4xl sm:text-6xl font-extrabold',
			3: 'text-2xl sm:text-4xl',
			4: 'text-xl sm:text-2xl',
		},
		tone: {
			foreground: 'text-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
			tertiary: 'text-tertiary',
			muted: 'text-muted-foreground',
			onDeep: 'text-surface-deep-foreground',
		},
	},
	defaultVariants: { level: 2, tone: 'foreground' },
});

/**
 * A display heading: large, heavy, tightly tracked.
 *
 * `level` drives both the rendered tag and the size, so the visual hierarchy and
 * the document outline stay in step. Pass `as` to override the tag alone when a
 * heading must sit at a different level than it looks.
 *
 * **The accent-word pattern.** m-design headings carry their emphasis by
 * setting one word in magenta, not by colouring the whole line. Wrap that word
 * in a span — this is the system's signature move and should appear roughly
 * once per section:
 *
 * ```jsx
 * <Heading level={1}>
 *   Stop designing courses.{' '}
 *   <span className="text-secondary">Start crafting experiences.</span>
 * </Heading>
 * ```
 *
 * Use `tone="onDeep"` for headings inside a `Statement` or any `surface-deep`
 * section.
 *
 * @category Primitives
 */
const Heading = React.forwardRef(({ className, level = 2, tone, as, ...props }, ref) => {
	const Comp = as ?? `h${level}`;
	return (
		<Comp ref={ref} className={cn(headingVariants({ level, tone }), className)} {...props} />
	);
});
Heading.displayName = 'Heading';

export { Heading, headingVariants };
