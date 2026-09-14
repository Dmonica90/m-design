import { Badge, Card, CardContent, CardHeader, CardTitle } from 'web-app';

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Badge>Featured</Badge>
    <Badge variant="secondary">Storyline</Badge>
    <Badge variant="outline">In progress</Badge>
    <Badge variant="muted">Archived</Badge>
    <Badge variant="destructive">Deprecated</Badge>
  </div>
);

export const AsTagList = () => (
  <div className="flex flex-wrap gap-2 max-w-md">
    <Badge variant="secondary">Articulate Storyline</Badge>
    <Badge variant="secondary">JavaScript</Badge>
    <Badge variant="secondary">SCORM</Badge>
    <Badge variant="secondary">xAPI</Badge>
    <Badge variant="secondary">Figma</Badge>
    <Badge variant="secondary">After Effects</Badge>
  </div>
);

export const OnACard = () => (
  <Card className="max-w-md">
    <CardHeader>
      <div className="flex items-center justify-between gap-3">
        <CardTitle className="text-xl">Waste sorting course</CardTitle>
        <Badge>Live</Badge>
      </div>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      <Badge variant="outline">12 modules</Badge>
      <Badge variant="muted">ES / EN</Badge>
    </CardContent>
  </Card>
);
