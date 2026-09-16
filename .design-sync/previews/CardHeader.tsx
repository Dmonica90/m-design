import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'web-app';

export const InACard = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Museo 8M</CardTitle>
      <CardDescription>A side-scrolling museum about women in computing.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        The header owns the card's top padding and stacks its children with a
        1.5-unit gap.
      </p>
    </CardContent>
  </Card>
);

export const TitleOnly = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Instructional design</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        A description is optional — omit it when the title carries the meaning.
      </p>
    </CardContent>
  </Card>
);

export const WithTrailingBadge = () => (
  <Card className="max-w-md">
    <CardHeader>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <CardTitle className="text-xl">Safety onboarding</CardTitle>
          <CardDescription>Six modules, SCORM 1.2.</CardDescription>
        </div>
        <Badge>Live</Badge>
      </div>
    </CardHeader>
  </Card>
);
