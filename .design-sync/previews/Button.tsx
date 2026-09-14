import { Button } from 'web-app';

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button>View my work</Button>
    <Button variant="secondary">Download CV</Button>
    <Button variant="outline">Learn more</Button>
    <Button variant="ghost">Skip intro</Button>
    <Button variant="link">Read the case study</Button>
    <Button variant="destructive">Delete draft</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const AsLink = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="lg" asChild>
      <a href="https://wa.me/525631864638">Message me on WhatsApp</a>
    </Button>
    <Button variant="outline" size="lg" asChild>
      <a href="mailto:hello@example.com">Send an email</a>
    </Button>
  </div>
);

export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Submitting…</Button>
    <Button variant="outline" disabled>
      Unavailable
    </Button>
  </div>
);
