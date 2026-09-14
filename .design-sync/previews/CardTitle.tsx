import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'web-app';

export const Default = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Gamified safety onboarding</CardTitle>
      <CardDescription>Six modules for warehouse field technicians.</CardDescription>
    </CardHeader>
  </Card>
);

export const Sizes = () => (
  <div className="space-y-4 max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>Default — text-2xl</CardTitle>
      </CardHeader>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Compact — text-xl for dense grids</CardTitle>
      </CardHeader>
    </Card>
  </div>
);

export const HeadingLevel = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle as="h2">Rendered as an h2</CardTitle>
      <CardDescription>
        Pass `as` so the page outline stays correct without changing the size.
      </CardDescription>
    </CardHeader>
  </Card>
);
