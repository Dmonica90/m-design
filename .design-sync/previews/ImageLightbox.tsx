import { ImageLightbox } from 'web-app';

// Two preview-only concerns, both handled by Stage; the component is untouched.
//
//  1. ImageLightbox is `fixed inset-0` and takes no className. A CSS transform
//     on an ancestor makes that ancestor the containing block for fixed
//     descendants, so the scrim fills the card instead of the window.
//  2. It enters with framer-motion from `opacity: 0` / `scale: 0.5`. A still
//     capture never runs that animation, so the rule below lands the overlay at
//     its settled state.
const Stage = ({ children }) => (
  <div
    className="ds-lightbox-stage relative w-full overflow-hidden rounded-lg"
    style={{ transform: 'translateZ(0)', minHeight: 420 }}
  >
    <style>{`
      .ds-lightbox-stage [style*="opacity"] { opacity: 1 !important; }
      .ds-lightbox-stage div[style*="transform"] { transform: none !important; }
    `}</style>
    {children}
  </div>
);

// A 3:2 sample frame, inlined so the card never depends on the network.
const SAMPLE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
       <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0%" stop-color="hsl(205 90% 55%)"/>
         <stop offset="100%" stop-color="hsl(338 90% 88%)"/>
       </linearGradient></defs>
       <rect width="600" height="400" fill="url(#g)"/>
       <text x="300" y="205" font-family="system-ui, sans-serif" font-size="30"
             fill="white" text-anchor="middle">Course screenshot</text>
     </svg>`,
  );

export const Open = () => (
  <Stage>
    <ImageLightbox
      imageUrl={SAMPLE}
      altText="A screen from the waste sorting course"
      onClose={() => {}}
    />
  </Stage>
);

export const Closed = () => (
  <div className="rounded-lg bg-muted/40 p-8 text-center">
    <ImageLightbox imageUrl={null} altText="" onClose={() => {}} />
    <p className="text-muted-foreground">
      With <code className="text-primary">imageUrl={'{null}'}</code> the lightbox
      renders nothing — this is the closed state.
    </p>
  </div>
);
