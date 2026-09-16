import { Toaster, toast } from 'web-app';

// Toaster renders whatever the toast store holds, so a static preview has to
// put something there first. `duration: Infinity` keeps it up for the capture,
// and the store keeps one toast at a time (TOAST_LIMIT = 1) — hence one seed
// per cell.
//
// Toaster's viewport is `fixed` and Toaster takes no className, so each cell
// wraps it in a transformed element: a CSS transform makes it the containing
// block for fixed descendants, which lands the toast in the card's own
// bottom-right instead of the window's.
const Stage = ({ children }) => (
  <div
    className="relative w-full rounded-lg bg-muted"
    style={{ transform: 'translateZ(0)', minHeight: 280 }}
  >
    {children}
  </div>
);

export const WithAToast = () => {
  toast({
    title: 'Message sent',
    description: 'I usually reply within a day.',
    duration: Infinity,
  });
  return (
    <Stage>
      <p className="max-w-xs p-4 text-sm text-muted-foreground">
        Toaster is mounted once near the app root. Calling{' '}
        <code className="text-primary">toast(…)</code> from anywhere puts a
        notification in the corner.
      </p>
      <Toaster />
    </Stage>
  );
};

export const Destructive = () => {
  toast({
    variant: 'destructive',
    title: 'Upload failed',
    description: 'The SCORM package was larger than 25 MB.',
    duration: Infinity,
  });
  return (
    <Stage>
      <p className="max-w-xs p-4 text-sm text-muted-foreground">
        Pass <code className="text-primary">variant: 'destructive'</code> for
        failures.
      </p>
      <Toaster />
    </Stage>
  );
};
