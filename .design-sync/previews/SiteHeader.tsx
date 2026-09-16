import { Button, SiteHeader } from 'web-app';

// Two things make SiteHeader awkward to capture as a still, and Stage
// neutralises both. Neither changes the component:
//
//  1. It is `fixed`, so in a preview card it would pin to the window rather
//     than the cell — each cell overrides the position class via `className`
//     (cn/twMerge lets the caller's position class win).
//  2. It enters with framer-motion from `y: -100`, and a still capture never
//     runs that animation — the header would sit 100px above the frame. The
//     rule below lands it at its settled position.
const Stage = ({ children, className = '', style }) => (
  <div className={`ds-header-stage w-full ${className}`} style={style}>
    <style>{`
      .ds-header-stage header { transform: none !important; opacity: 1 !important; }
    `}</style>
    {children}
  </div>
);

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'What I do', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Playground', href: '/playground' },
];

const languageToggle = (
  <Button variant="ghost" size="sm" aria-label="Toggle language">
    ES
  </Button>
);

export const Solid = () => (
  <Stage>
    <SiteHeader
      solid
      className="static"
      brand="Monica Vázquez"
      brandHref="/#home"
      navItems={navItems}
      actions={languageToggle}
    />
  </Stage>
);

export const OverAHero = () => (
  <Stage
    className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10"
    style={{ minHeight: 340 }}
  >
    <SiteHeader
      className="absolute"
      brand="Monica Vázquez"
      navItems={navItems}
      actions={languageToggle}
    />
    <div className="pt-32 pb-16 text-center px-6">
      <h1 className="text-5xl font-bold text-primary tracking-tight">
        Interactive eLearning
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Transparent over the top of the page, solid once you scroll.
      </p>
    </div>
  </Stage>
);

export const MinimalNav = () => (
  <Stage>
    <SiteHeader
      solid
      className="static"
      brand="Monica Vázquez"
      navItems={[
        { label: 'Work', href: '/#projects' },
        { label: 'Contact', href: '/#contact' },
      ]}
    />
  </Stage>
);
