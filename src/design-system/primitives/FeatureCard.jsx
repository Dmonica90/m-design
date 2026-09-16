import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const surfaceVariants = cva('rounded-lg p-6 space-y-3', {
	variants: {
		tone: {
			primary: 'bg-primary/10',
			secondary: 'bg-secondary/10',
			tertiary: 'bg-tertiary/10',
			muted: 'bg-muted',
		},
	},
	defaultVariants: { tone: 'primary' },
});

const iconToneVariants = cva('', {
	variants: {
		tone: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			tertiary: 'text-tertiary',
			muted: 'text-muted-foreground',
		},
	},
	defaultVariants: { tone: 'primary' },
});

/**
 * A flat tinted panel led by a line icon — m-design's workhorse for presenting
 * a set of parallel ideas side by side.
 *
 * Feature cards travel in rows of two to four, each on a different `tone`, which
 * is how the system gets colour onto a page without any one element shouting.
 * Pass a line icon (lucide-react and friends) as `icon`; keep `title` to a few
 * words and the body to a short list or a sentence.
 *
 * ```jsx
 * <div className="grid sm:grid-cols-3 gap-6">
 *   <FeatureCard tone="secondary" icon={<Compass className="h-6 w-6" />} title="Behavior">
 *     ¿Qué debe hacer o cambiar?
 *   </FeatureCard>
 *   <FeatureCard tone="primary" icon={<Map className="h-6 w-6" />} title="Journey">
 *     ¿Cómo lo va a vivir?
 *   </FeatureCard>
 *   <FeatureCard tone="tertiary" icon={<Target className="h-6 w-6" />} title="Economy">
 *     ¿Qué valor genera?
 *   </FeatureCard>
 * </div>
 * ```
 *
 * @category Primitives
 */
const FeatureCard = React.forwardRef(
	({ className, tone, icon, title, eyebrow, children, ...props }, ref) => (
		<div ref={ref} className={cn(surfaceVariants({ tone }), className)} {...props}>
			{icon && <div className={iconToneVariants({ tone })}>{icon}</div>}
			{eyebrow && (
				<p className="uppercase tracking-[0.18em] font-semibold text-xs text-muted-foreground">
					{eyebrow}
				</p>
			)}
			{title && <h3 className="text-lg font-bold leading-tight tracking-tight">{title}</h3>}
			{children && (
				<div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
			)}
		</div>
	),
);
FeatureCard.displayName = 'FeatureCard';

export { FeatureCard, surfaceVariants as featureCardVariants };
