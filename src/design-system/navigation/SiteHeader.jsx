import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Button } from '../primitives/Button.jsx';
import { Container } from '../layout/Container.jsx';
import { cn } from '../lib/utils.js';

/**
 * The fixed site header: brand on the left, navigation and actions on the
 * right, collapsing to a toggle menu below `md`.
 *
 * It is transparent over the top of the page and fades to a blurred, shadowed
 * surface once the page scrolls past 50px — so it must sit over content that
 * starts at the very top. Pass `solid` to skip that behaviour and paint the
 * surface immediately (use it on pages with no hero, and in previews).
 *
 * Content is entirely prop-driven — the header reads no context and holds no
 * copy of its own, so an app supplies translated labels and its own action
 * controls:
 *
 * ```jsx
 * <SiteHeader
 *   brand="Monica Vázquez"
 *   brandHref="/#home"
 *   navItems={[{ label: 'About', href: '/#about' }, { label: 'Contact', href: '/#contact' }]}
 *   actions={<Button variant="ghost" size="sm">ES</Button>}
 * />
 * ```
 *
 * @category Navigation
 */
const SiteHeader = ({
	brand,
	brandHref = '#home',
	navItems = [],
	actions,
	solid = false,
	className,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen((open) => !open);
	const filled = solid || isScrolled || isOpen;

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				filled ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent',
				className,
			)}
		>
			<Container>
				<div className="flex items-center justify-between h-20">
					<a
						href={brandHref}
						className="text-2xl font-bold text-foreground hover:text-secondary transition-colors"
					>
						{brand}
					</a>

					<nav className="hidden md:flex items-center space-x-6">
						{navItems.map((item) => (
							<a
								key={item.href + item.label}
								href={item.href}
								className="text-foreground hover:text-primary transition-colors font-medium"
							>
								{item.label}
							</a>
						))}
						{actions}
					</nav>

					<div className="md:hidden flex items-center">
						{actions}
						<Button
							onClick={toggleMenu}
							variant="ghost"
							size="icon"
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isOpen}
						>
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</Button>
					</div>
				</div>
			</Container>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					className="md:hidden bg-background/95 shadow-lg"
				>
					<nav className="flex flex-col items-center space-y-4 py-4">
						{navItems.map((item) => (
							<a
								key={item.href + item.label}
								href={item.href}
								onClick={toggleMenu}
								className="text-lg text-foreground hover:text-primary transition-colors"
							>
								{item.label}
							</a>
						))}
					</nav>
				</motion.div>
			)}
		</motion.header>
	);
};
SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
