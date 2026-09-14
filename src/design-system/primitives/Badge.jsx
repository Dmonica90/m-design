import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const badgeVariants = cva(
	'inline-flex items-center justify-center font-semibold transition-colors',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground',
				secondary: 'bg-secondary text-secondary-foreground',
				tertiary: 'bg-tertiary text-tertiary-foreground',
				destructive: 'bg-destructive text-destructive-foreground',
				outline: 'border border-border text-foreground',
				muted: 'bg-muted text-muted-foreground',
			},
			shape: {
				label: 'rounded-md px-2.5 py-0.5 text-xs',
				pill: 'rounded-full px-3 py-0.5 text-xs',
				counter: 'rounded-full h-6 w-6 text-xs shrink-0',
			},
		},
		defaultVariants: { variant: 'default', shape: 'label' },
	},
);

/**
 * A small, non-interactive label for status, category or count.
 *
 * Three shapes cover the system's uses: `label` for metadata next to content,
 * `pill` for tags, and `counter` — a fixed circle — for the numbered markers
 * that run through m-design's lists, tables and step sequences.
 *
 * ```jsx
 * <Badge variant="secondary" shape="pill">Storyline</Badge>
 * <Badge variant="secondary" shape="counter">01</Badge>
 * ```
 *
 * It is deliberately not a button: if it should be clickable, use a `Button`
 * with `size="sm"` instead.
 *
 * @category Primitives
 */
const Badge = React.forwardRef(({ className, variant, shape, ...props }, ref) => (
	<div ref={ref} className={cn(badgeVariants({ variant, shape }), className)} {...props} />
));
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
