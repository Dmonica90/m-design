import { Badge, Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from 'web-app';

export const WithActions = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Museo 8M</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        A side-scrolling museum about women in computing.
      </p>
    </CardContent>
    <CardFooter className="gap-3">
      <Button size="sm">Play it</Button>
      <Button size="sm" variant="outline">Read the notes</Button>
    </CardFooter>
  </Card>
);

export const SplitRow = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle className="text-xl">Survive the stakeholder</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        A dialogue game about managing difficult feedback.
      </p>
    </CardContent>
    <CardFooter className="justify-between">
      <Badge variant="muted">2024</Badge>
      <Button size="sm" variant="ghost">Open</Button>
    </CardFooter>
  </Card>
);

export const SingleFullWidth = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle className="text-xl">Ready to start?</CardTitle>
    </CardHeader>
    <CardFooter>
      <Button className="w-full">Send me a message</Button>
    </CardFooter>
  </Card>
);
