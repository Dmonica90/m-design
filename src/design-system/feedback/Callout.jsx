import { cva } from 'class-variance-authority';
import React from 'react';
import { Info } from 'lucide-react';
import { cn } from '../lib/utils.js';

const calloutVariants = cva('flex items-start gap-4 rounded-lg p-5', {
	variants: {
		tone: {
			info: 'bg-primary/10',
			tip: 'bg-tertiary/10',
			accent: 'bg-secondary/10',
			muted: 'bg-muted',
		},
	},
	defaultVariants: { tone: 'info' },
});

const iconWrapVariants = cva(
	'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
	{
		variants: {
			tone: {
				info: 'bg-primary text-primary-foreground',
				tip: 'bg-tertiary text-tertiary-foreground',
				accent: 'bg-secondary text-secondary-foreground',
				muted: 'bg-border text-foreground',
			},
		},
		defaultVariants: { tone: 'info' },
	},
);

/**
 * An aside that interrupts the reading flow without breaking it: a tinted panel
 * with a circular icon at the left.
 *
 * Use it for the one thing a reader must not miss on a page — a caveat, a
 * definition, the question a whole section hangs on. One per screen at most;
 * a page of callouts is a page with no emphasis.
 *
 * ```jsx
 * <Callout tone="tip" icon={<Lightbulb className="h-5 w-5" />}>
 *   El Canvas no es un documento, es una conversación estructurada.
 * </Callout>
 * ```
 *
 * `icon` defaults to an info glyph, so the simplest form is just children.
 *
 * @category Feedback
 */
const Callout = React.forwardRef(({ className, tone, icon, title, children, ...props }, ref) => (
	<div ref={ref} className={cn(calloutVariants({ tone }), className)} {...props}>
		<div className={iconWrapVariants({ tone })}>
			{icon ?? <Info className="h-5 w-5" />}
		</div>
		<div className="space-y-1 pt-1">
			{title && <p className="font-semibold leading-snug">{title}</p>}
			{children && <div className="text-sm leading-relaxed">{children}</div>}
		</div>
	</div>
));
Callout.displayName = 'Callout';

export { Callout, calloutVariants };
