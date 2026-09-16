import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const textVariants = cva('leading-relaxed', {
	variants: {
		size: {
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
		},
		tone: {
			foreground: 'text-foreground',
			muted: 'text-muted-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
			tertiary: 'text-tertiary',
			onDeep: 'text-surface-deep-foreground',
		},
	},
	defaultVariants: { size: 'base', tone: 'foreground' },
});

/**
 * Body copy. Renders a `<p>` with m-design's relaxed line height.
 *
 * `tone="muted"` is the system's supporting-text colour — use it for section
 * subtitles, captions and any prose that sits under a heading. Pass `as="span"`
 * for inline runs.
 *
 * ```jsx
 * <Text size="lg" tone="muted">
 *   Interactive eLearning, built to be played rather than clicked through.
 * </Text>
 * ```
 *
 * @category Primitives
 */
const Text = React.forwardRef(({ className, size, tone, as: Comp = 'p', ...props }, ref) => (
	<Comp
		ref={ref}
		className={cn(textVariants({ size, tone }), className)}
		{...props}
	/>
));
Text.displayName = 'Text';

export { Text, textVariants };
