import { Button, Input } from 'web-app';

export const Default = () => (
  <div className="max-w-sm space-y-3">
    <Input placeholder="you@example.com" aria-label="Email" />
    <Input defaultValue="Monica Vázquez" aria-label="Full name" />
  </div>
);

export const WithLabel = () => (
  <div className="max-w-sm space-y-2">
    <label htmlFor="project" className="text-sm font-medium text-foreground">
      Project name
    </label>
    <Input id="project" placeholder="Safety onboarding, module 3" />
    <p className="text-sm text-muted-foreground">Shown on the course landing page.</p>
  </div>
);

export const States = () => (
  <div className="max-w-sm space-y-3">
    <Input placeholder="Enabled" aria-label="Enabled" />
    <Input placeholder="Disabled" disabled aria-label="Disabled" />
    <Input defaultValue="Read only" readOnly aria-label="Read only" />
  </div>
);

export const InlineWithButton = () => (
  <div className="flex max-w-md items-center gap-3">
    <Input type="email" placeholder="Your email" aria-label="Email" />
    <Button>Subscribe</Button>
  </div>
);
