// Design-system entry for /design-sync.
//
// This repo is a Vite app, not a published component library, so it has no
// library entry of its own. This file is that entry: it re-exports the real
// shipped components (nothing is reimplemented here) plus the context provider
// previews need, and pulls in the global stylesheet so the lib build emits
// compiled Tailwind CSS alongside the JS.
import '@/index.css';

export { Button, buttonVariants } from '@/components/ui/button';
export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
export {
	Toast,
	ToastAction,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/ui/toast';
export { Toaster } from '@/components/ui/toaster';
export { useToast, toast } from '@/components/ui/use-toast';

export { default as Header } from '@/components/Header';
export { default as Footer } from '@/components/Footer';
export { default as SectionWrapper } from '@/components/SectionWrapper';
export { default as ImageLightbox } from '@/components/ImageLightbox';

export { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
export { cn } from '@/lib/utils';
