import React from 'react';
import { cn } from '../lib/utils.js';

/**
 * The horizontal page gutter every m-design layout sits inside.
 *
 * One place owns the max width and the responsive side padding
 * (`px-4 sm:px-6 lg:px-8`), so headers, sections and footers line up down the
 * page. Never re-declare those paddings on a child — nest a `Container` or
 * pass `className` here.
 *
 * @category Layout
 */
const Container = React.forwardRef(({ className, as: Comp = 'div', ...props }, ref) => (
	<Comp
		ref={ref}
		className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}
		{...props}
	/>
));
Container.displayName = 'Container';

export { Container };
