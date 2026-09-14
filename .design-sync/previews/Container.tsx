import { Container } from 'web-app';

export const Default = () => (
  <Container>
    <div className="bg-muted rounded-lg p-6 text-center">
      <p className="text-sm text-muted-foreground">
        Container centres content and owns the page gutter
        (px-4 / sm:px-6 / lg:px-8). Every header, section and footer uses it, so
        edges line up down the page.
      </p>
    </div>
  </Container>
);

export const HoldingAGrid = () => (
  <Container>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-primary/10 rounded-md p-6 text-center text-sm">One</div>
      <div className="bg-primary/10 rounded-md p-6 text-center text-sm">Two</div>
      <div className="bg-primary/10 rounded-md p-6 text-center text-sm">Three</div>
    </div>
  </Container>
);

export const AsASemanticTag = () => (
  <Container as="section" className="py-8">
    <h2 className="text-2xl font-bold text-primary tracking-tight">
      Rendered as a section
    </h2>
    <p className="mt-2 text-muted-foreground">
      Pass `as` when the gutter element should also carry page semantics.
    </p>
  </Container>
);
