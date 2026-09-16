/**
 * m-design — the design system behind monicavazquez.design.
 *
 * Everything the system exposes is a named export from this file. Import from
 * the package root, never from a file path inside it:
 *
 *   import { Button, Card, CardHeader, SectionWrapper } from 'm-design';
 */

// --- Primitives --------------------------------------------------------
export { Button, buttonVariants } from './primitives/Button.jsx';
export { Badge, badgeVariants } from './primitives/Badge.jsx';
export { Input } from './primitives/Input.jsx';
export { Textarea } from './primitives/Textarea.jsx';
export { Heading, headingVariants } from './primitives/Heading.jsx';
export { Eyebrow, eyebrowNumberVariants, eyebrowLabelVariants } from './primitives/Eyebrow.jsx';
export { FeatureCard, featureCardVariants } from './primitives/FeatureCard.jsx';
export { NumberedList, NumberedListItem } from './primitives/NumberedList.jsx';
export { Text, textVariants } from './primitives/Text.jsx';
export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	cardVariants,
} from './primitives/Card.jsx';

// --- Layout ------------------------------------------------------------
export { Container } from './layout/Container.jsx';
export { SectionWrapper } from './layout/SectionWrapper.jsx';
export { Statement } from './layout/Statement.jsx';

// --- Navigation --------------------------------------------------------
export { SiteHeader } from './navigation/SiteHeader.jsx';
export { SiteFooter } from './navigation/SiteFooter.jsx';

// --- Overlay -----------------------------------------------------------
export { ImageLightbox } from './overlay/ImageLightbox.jsx';

// --- Feedback ----------------------------------------------------------
export {
	Toast,
	ToastAction,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
	toastVariants,
} from './feedback/Toast.jsx';
export { Toaster } from './feedback/Toaster.jsx';
export { Callout, calloutVariants } from './feedback/Callout.jsx';
export { toast, useToast } from './feedback/use-toast.js';

// --- Utilities ---------------------------------------------------------
export { cn } from './lib/utils.js';
