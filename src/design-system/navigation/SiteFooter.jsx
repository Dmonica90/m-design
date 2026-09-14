import React from 'react';
import { Container } from '../layout/Container.jsx';
import { cn } from '../lib/utils.js';

/**
 * The closing band of a page: a quiet, centred strip with an inner shadow that
 * separates it from the content above.
 *
 * Pass the copy as `children` — like `SiteHeader`, it reads no context, so
 * translated text comes from the app. Keep it to one line; anything longer
 * belongs in a section above the footer.
 *
 * ```jsx
 * <SiteFooter>© 2026 Monica Vázquez. Built with curiosity.</SiteFooter>
 * ```
 *
 * @category Navigation
 */
const SiteFooter = ({ children, className }) => (
	<footer
		className={cn(
			'py-8 text-center bg-background/80 backdrop-blur-sm shadow-inner',
			className,
		)}
	>
		<Container>
			<p className="text-sm text-muted-foreground">{children}</p>
		</Container>
	</footer>
);
SiteFooter.displayName = 'SiteFooter';

export { SiteFooter };
