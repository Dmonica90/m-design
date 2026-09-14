import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class strings, letting later classes win over earlier ones.
 *
 * Every m-design component funnels its `className` prop through `cn` so a
 * caller can override a default without fighting specificity:
 * `cn('bg-primary', 'bg-secondary')` resolves to `'bg-secondary'`.
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
