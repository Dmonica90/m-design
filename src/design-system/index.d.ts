import * as React from 'react';

/* ------------------------------------------------------------------ *
 * Primitives
 * ------------------------------------------------------------------ */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight of the action. @default "default" */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** Control height and padding. Use "icon" for a square icon-only button. @default "default" */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Render the button styling onto the single child element instead of a <button>. Use it to style an <a> as a button. @default false */
  asChild?: boolean;
  className?: string;
}
export declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;
export declare function buttonVariants(opts?: {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
}): string;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour role of the label. @default "default" */
  variant?: 'default' | 'secondary' | 'tertiary' | 'destructive' | 'outline' | 'muted';
  /** "label" for metadata, "pill" for tags, "counter" for the fixed circular number marker. @default "label" */
  shape?: 'label' | 'pill' | 'counter';
  className?: string;
}
export declare const Badge: React.ForwardRefExoticComponent<
  BadgeProps & React.RefAttributes<HTMLDivElement>
>;
export declare function badgeVariants(opts?: { variant?: BadgeProps['variant']; shape?: BadgeProps['shape']; className?: string }): string;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** @default "text" */
  type?: string;
  className?: string;
}
export declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
export declare const Textarea: React.ForwardRefExoticComponent<
  TextareaProps & React.RefAttributes<HTMLTextAreaElement>
>;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading rank — drives both the rendered tag and the type scale. @default 2 */
  level?: 1 | 2 | 3 | 4;
  /** Colour role. Use "onDeep" inside a Statement or any surface-deep section. @default "foreground" */
  tone?: 'foreground' | 'primary' | 'secondary' | 'tertiary' | 'muted' | 'onDeep';
  /** Override the rendered tag without changing the size. */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
export declare const Heading: React.ForwardRefExoticComponent<
  HeadingProps & React.RefAttributes<HTMLHeadingElement>
>;
export declare function headingVariants(opts?: {
  level?: HeadingProps['level'];
  tone?: HeadingProps['tone'];
  className?: string;
}): string;

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Type scale for body copy. @default "base" */
  size?: 'sm' | 'base' | 'lg';
  /** Colour role. Use "muted" for supporting copy, "onDeep" on a dark section. @default "foreground" */
  tone?: 'foreground' | 'muted' | 'primary' | 'secondary' | 'tertiary' | 'onDeep';
  /** Rendered tag. @default "p" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
export declare const Text: React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLParagraphElement>
>;
export declare function textVariants(opts?: {
  size?: TextProps['size'];
  tone?: TextProps['tone'];
  className?: string;
}): string;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface wash. m-design cards are tinted and flat by default. @default "plain" */
  tone?: 'plain' | 'primary' | 'secondary' | 'tertiary' | 'muted';
  /** "flat" is the system default; "raised" adds a shadow for surfaces that genuinely float. @default "flat" */
  elevation?: 'flat' | 'raised' | 'outlined';
  className?: string;
}
export declare const Card: React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
>;

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export declare const CardHeader: React.ForwardRefExoticComponent<
  CardHeaderProps & React.RefAttributes<HTMLDivElement>
>;

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading tag to render, so the page outline stays correct. @default "h3" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
export declare const CardTitle: React.ForwardRefExoticComponent<
  CardTitleProps & React.RefAttributes<HTMLHeadingElement>
>;

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}
export declare const CardDescription: React.ForwardRefExoticComponent<
  CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export declare const CardContent: React.ForwardRefExoticComponent<
  CardContentProps & React.RefAttributes<HTMLDivElement>
>;

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export declare const CardFooter: React.ForwardRefExoticComponent<
  CardFooterProps & React.RefAttributes<HTMLDivElement>
>;


export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Oversized leading number, e.g. "01". Omit for an unnumbered section. */
  number?: React.ReactNode;
  /** Short uppercase caption shown beside the number. */
  children?: React.ReactNode;
  /** Size of the number. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Colour of the number. @default "secondary" */
  tone?: 'secondary' | 'primary' | 'tertiary' | 'onDeep';
  /** Colour of the caption. Defaults to muted, or onDeep when tone is onDeep. */
  labelTone?: 'secondary' | 'primary' | 'tertiary' | 'muted' | 'onDeep';
  className?: string;
}
export declare const Eyebrow: React.ForwardRefExoticComponent<
  EyebrowProps & React.RefAttributes<HTMLDivElement>
>;

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface wash. Vary it across a row of cards. @default "primary" */
  tone?: 'primary' | 'secondary' | 'tertiary' | 'muted';
  /** A line icon, sized by the caller (e.g. className="h-6 w-6"). */
  icon?: React.ReactNode;
  /** Short uppercase caption above the title. */
  eyebrow?: React.ReactNode;
  /** Card heading — a few words. */
  title?: React.ReactNode;
  /** Body: a sentence or a short list. */
  children?: React.ReactNode;
  className?: string;
}
export declare const FeatureCard: React.ForwardRefExoticComponent<
  FeatureCardProps & React.RefAttributes<HTMLDivElement>
>;

export interface NumberedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  /** Colour of the circular counters. @default "secondary" */
  tone?: 'secondary' | 'default' | 'tertiary' | 'muted';
  children?: React.ReactNode;
  className?: string;
}
export declare const NumberedList: React.ForwardRefExoticComponent<
  NumberedListProps & React.RefAttributes<HTMLOListElement>
>;

export interface NumberedListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Bold lead line of the step. */
  title?: React.ReactNode;
  /** Optional supporting copy beneath the title. */
  children?: React.ReactNode;
  className?: string;
}
export declare const NumberedListItem: React.ForwardRefExoticComponent<
  NumberedListItemProps & React.RefAttributes<HTMLLIElement>
>;

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel wash and icon colour. @default "info" */
  tone?: 'info' | 'tip' | 'accent' | 'muted';
  /** Icon inside the circle. Defaults to an info glyph. */
  icon?: React.ReactNode;
  /** Optional bold lead line. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare const Callout: React.ForwardRefExoticComponent<
  CalloutProps & React.RefAttributes<HTMLDivElement>
>;

export interface StatementProps {
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Horizontal alignment of the block. @default "left" */
  align?: 'left' | 'center';
  children?: React.ReactNode;
  className?: string;
}
export declare const Statement: React.FC<StatementProps>;

/* ------------------------------------------------------------------ *
 * Layout
 * ------------------------------------------------------------------ */

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Rendered tag. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
export declare const Container: React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLElement>
>;

export interface SectionWrapperProps {
  /** Anchor id, so in-page navigation can target the section. */
  id?: string;
  /** Oversized magenta numeral above the heading, e.g. "02". */
  number?: React.ReactNode;
  /** Short uppercase caption beside the number. */
  eyebrow?: React.ReactNode;
  /** Centred section heading. Omit for an untitled section. */
  title?: React.ReactNode;
  /** Supporting line under the title. Only rendered when `title` is set. */
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare const SectionWrapper: React.FC<SectionWrapperProps>;

/* ------------------------------------------------------------------ *
 * Navigation
 * ------------------------------------------------------------------ */

export interface SiteHeaderNavItem {
  /** Visible link text — already translated by the app. */
  label: React.ReactNode;
  /** Target href, e.g. "/#about" or "/playground". */
  href: string;
}

export interface SiteHeaderProps {
  /** Brand mark or wordmark shown at the left. */
  brand?: React.ReactNode;
  /** Where the brand links to. @default "#home" */
  brandHref?: string;
  /** Primary navigation links. @default [] */
  navItems?: SiteHeaderNavItem[];
  /** Controls rendered after the links — a language toggle, a call to action. */
  actions?: React.ReactNode;
  /** Paint the header surface immediately instead of waiting for scroll. @default false */
  solid?: boolean;
  className?: string;
}
export declare const SiteHeader: React.FC<SiteHeaderProps>;

export interface SiteFooterProps {
  /** Footer copy — keep it to one line. */
  children?: React.ReactNode;
  className?: string;
}
export declare const SiteFooter: React.FC<SiteFooterProps>;

/* ------------------------------------------------------------------ *
 * Overlay
 * ------------------------------------------------------------------ */

export interface ImageLightboxProps {
  /** Image to show. `null` or omitted closes the lightbox. */
  imageUrl?: string | null;
  /** Alternative text for the image. */
  altText?: string;
  /** Called when the scrim or the close button is clicked. */
  onClose?: () => void;
}
export declare const ImageLightbox: React.FC<ImageLightboxProps>;

/* ------------------------------------------------------------------ *
 * Feedback
 * ------------------------------------------------------------------ */

export interface ToastProps extends React.HTMLAttributes<HTMLLIElement> {
  /** @default "default" */
  variant?: 'default' | 'destructive';
  /** Milliseconds before auto-dismiss. `Infinity` keeps it until dismissed. @default 5000 */
  duration?: number;
  className?: string;
}
export declare const Toast: React.ForwardRefExoticComponent<
  ToastProps & React.RefAttributes<HTMLLIElement>
>;
export declare function toastVariants(opts?: { variant?: ToastProps['variant']; className?: string }): string;

export interface ToastProviderProps {
  children?: React.ReactNode;
  /** Default auto-dismiss for toasts rendered inside. @default 5000 */
  duration?: number;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;

export interface ToastViewportProps extends React.HTMLAttributes<HTMLOListElement> {
  className?: string;
}
export declare const ToastViewport: React.ForwardRefExoticComponent<
  ToastViewportProps & React.RefAttributes<HTMLOListElement>
>;

export interface ToastActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Describes the action for assistive technology. Required by Radix. */
  altText: string;
  className?: string;
}
export declare const ToastAction: React.ForwardRefExoticComponent<
  ToastActionProps & React.RefAttributes<HTMLButtonElement>
>;

export interface ToastCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export declare const ToastClose: React.ForwardRefExoticComponent<
  ToastCloseProps & React.RefAttributes<HTMLButtonElement>
>;

export interface ToastTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export declare const ToastTitle: React.ForwardRefExoticComponent<
  ToastTitleProps & React.RefAttributes<HTMLDivElement>
>;

export interface ToastDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export declare const ToastDescription: React.ForwardRefExoticComponent<
  ToastDescriptionProps & React.RefAttributes<HTMLDivElement>
>;

export interface ToasterProps {}
export declare function Toaster(props?: ToasterProps): JSX.Element;

export interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
  duration?: number;
}
export declare function toast(options: ToastOptions): {
  id: string;
  dismiss: () => void;
  update: (options: ToastOptions) => void;
};
export declare function useToast(): {
  toast: typeof toast;
  toasts: Array<ToastOptions & { id: string; dismiss: () => void }>;
};

/* ------------------------------------------------------------------ *
 * Utilities
 * ------------------------------------------------------------------ */

export declare function cn(...inputs: unknown[]): string;

export declare function cardVariants(opts?: {
  tone?: CardProps['tone'];
  elevation?: CardProps['elevation'];
  className?: string;
}): string;
export declare function featureCardVariants(opts?: { tone?: FeatureCardProps['tone']; className?: string }): string;
export declare function calloutVariants(opts?: { tone?: CalloutProps['tone']; className?: string }): string;
export declare function eyebrowNumberVariants(opts?: { size?: EyebrowProps['size']; tone?: EyebrowProps['tone']; className?: string }): string;
export declare function eyebrowLabelVariants(opts?: { tone?: EyebrowProps['labelTone']; className?: string }): string;
