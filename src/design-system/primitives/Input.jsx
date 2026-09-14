import React from 'react';
import { cn } from '../lib/utils.js';

/**
 * A single-line text field.
 *
 * Height, radius and focus ring are matched to `Button` so the two line up in a
 * row without adjustment. Always give an `Input` an accessible name — either a
 * `<label htmlFor>` or `aria-label`.
 *
 * ```jsx
 * <Input type="email" placeholder="you@example.com" aria-label="Email" />
 * ```
 *
 * @category Primitives
 */
const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
	<input
		type={type}
		ref={ref}
		className={cn(
			'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
			className,
		)}
		{...props}
	/>
));
Input.displayName = 'Input';

export { Input };
