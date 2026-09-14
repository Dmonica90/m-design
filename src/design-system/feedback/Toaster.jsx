import React from 'react';
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from './Toast.jsx';
import { useToast } from './use-toast.js';

/**
 * The app-level toast outlet. Render it once, near the root, and never again —
 * it subscribes to the toast store and renders whatever `toast()` puts there.
 *
 * ```jsx
 * // once, at the root
 * <Toaster />
 *
 * // anywhere
 * import { toast } from 'm-design';
 * toast({ title: 'Message sent', description: 'I usually reply within a day.' });
 * ```
 *
 * The store keeps one toast at a time and auto-dismisses after 5s; pass
 * `duration: Infinity` to a `toast()` call to keep it until dismissed.
 *
 * @category Feedback
 */
export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => (
				<Toast key={id} {...props}>
					<div className="grid gap-1">
						{title && <ToastTitle>{title}</ToastTitle>}
						{description && <ToastDescription>{description}</ToastDescription>}
					</div>
					{action}
					<ToastClose />
				</Toast>
			))}
			<ToastViewport />
		</ToastProvider>
	);
}
Toaster.displayName = 'Toaster';
