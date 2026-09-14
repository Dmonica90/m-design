import React from 'react';
import { Badge } from './Badge.jsx';
import { cn } from '../lib/utils.js';

const ToneContext = React.createContext('secondary');

/**
 * An ordered list whose markers are m-design's circular counters.
 *
 * Numbering is automatic — each `NumberedListItem` takes its number from its
 * position, so reordering the list never leaves stale numbers behind. Use it
 * for sequences and steps; for unordered points, a plain `<ul>` is right.
 *
 * ```jsx
 * <NumberedList tone="secondary">
 *   <NumberedListItem title="Elige un proyecto real">
 *     O un reto de tu día a día.
 *   </NumberedListItem>
 *   <NumberedListItem title="Haz el Canvas" />
 *   <NumberedListItem title="Recorre las fases" />
 * </NumberedList>
 * ```
 *
 * @category Primitives
 */
const NumberedList = React.forwardRef(({ className, tone = 'secondary', children, ...props }, ref) => (
	<ToneContext.Provider value={tone}>
		<ol ref={ref} className={cn('space-y-4', className)} {...props}>
			{React.Children.map(children, (child, i) =>
				React.isValidElement(child) ? React.cloneElement(child, { index: i + 1 }) : child,
			)}
		</ol>
	</ToneContext.Provider>
));
NumberedList.displayName = 'NumberedList';

/**
 * One step of a `NumberedList`. Its number comes from its position in the list,
 * so never pass it by hand.
 *
 * `title` is the bold lead line; `children` is optional supporting copy beneath.
 *
 * @category Primitives
 */
const NumberedListItem = React.forwardRef(
	({ className, title, children, index, ...props }, ref) => {
		const tone = React.useContext(ToneContext);
		return (
			<li ref={ref} className={cn('flex items-start gap-4', className)} {...props}>
				<Badge variant={tone} shape="counter" className="mt-0.5">
					{String(index ?? 1).padStart(2, '0')}
				</Badge>
				<div className="space-y-1">
					{title && <p className="font-semibold leading-snug">{title}</p>}
					{children && (
						<div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
					)}
				</div>
			</li>
		);
	},
);
NumberedListItem.displayName = 'NumberedListItem';

export { NumberedList, NumberedListItem };
