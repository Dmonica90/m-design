import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/utils.js';

const cardVariants = cva('rounded-lg transition-shadow', {
	variants: {
		tone: {
			plain: 'bg-card text-card-foreground',
			primary: 'bg-primary/10 text-foreground',
			secondary: 'bg-secondary/10 text-foreground',
			tertiary: 'bg-tertiary/10 text-foreground',
			muted: 'bg-muted text-foreground',
		},
		elevation: {
			flat: '',
			raised: 'shadow-lg',
			outlined: 'border border-border',
		},
	},
	// A plain card is white, so on a white surface a flat one has no edge at all
	// and renders invisible. Tinted cards carry their own edge through the wash;
	// plain flat ones get a hairline so the default <Card /> is always visible.
	compoundVariants: [
		{ tone: 'plain', elevation: 'flat', class: 'border border-border' },
	],
	defaultVariants: { tone: 'plain', elevation: 'flat' },
});

/**
 * A surface that groups related content.
 *
 * m-design cards are **flat** — the system's dominant surface treatment is a
 * wash of a brand colour with no shadow. Set `tone` to tint one; a `plain` card
 * stays white and picks up a hairline border instead, so it is never invisible
 * against a white surface. Reach for `elevation="raised"` only when a card
 * genuinely floats above the page, such as a modal-like panel.
 *
 * `Card` is a compound component: compose it from `CardHeader`, `CardTitle`,
 * `CardDescription`, `CardContent` and `CardFooter` rather than hand-rolling
 * the padding.
 *
 * ```jsx
 * <Card tone="primary">
 *   <CardHeader>
 *     <CardTitle>Gamified onboarding</CardTitle>
 *     <CardDescription>A six-module course for field technicians.</CardDescription>
 *   </CardHeader>
 *   <CardContent>Built in Storyline with a custom JavaScript scoring layer.</CardContent>
 * </Card>
 * ```
 *
 * @category Primitives
 */
const Card = React.forwardRef(({ className, tone, elevation, ...props }, ref) => (
	<div ref={ref} className={cn(cardVariants({ tone, elevation }), className)} {...props} />
));
Card.displayName = 'Card';

/**
 * The top block of a `Card` — holds `CardTitle` and `CardDescription` and owns
 * the card's top padding.
 *
 * @category Primitives
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col space-y-2 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

/**
 * The heading of a `Card`. Renders an `<h3>` by default; pass `as` to fix the
 * heading level so the page outline stays correct.
 *
 * @category Primitives
 */
const CardTitle = React.forwardRef(({ className, as: Comp = 'h3', ...props }, ref) => (
	<Comp
		ref={ref}
		className={cn('text-xl font-bold leading-tight tracking-tight', className)}
		{...props}
	/>
));
CardTitle.displayName = 'CardTitle';

/**
 * Supporting text under a `CardTitle`, set in muted foreground.
 *
 * @category Primitives
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
	<p ref={ref} className={cn('text-sm text-muted-foreground leading-relaxed', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

/**
 * The body of a `Card`. Its top padding is removed so it sits flush under a
 * `CardHeader`; when used without a header, add `pt-6` yourself.
 *
 * @category Primitives
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * The action row of a `Card` — a flex row for buttons and metadata.
 *
 * @category Primitives
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
	cardVariants,
};
