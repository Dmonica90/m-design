import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'web-app';

export const UnderAHeader = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Branching scenarios</CardTitle>
      <CardDescription>Decisions with consequences that stick.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">
        Content sits flush under the header — its top padding is removed so the
        two read as one block.
      </p>
    </CardContent>
  </Card>
);

export const WithoutAHeader = () => (
  <Card className="max-w-md">
    <CardContent className="pt-6">
      <p className="text-muted-foreground leading-relaxed">
        Used on its own, add `pt-6` back so the copy is not flush against the
        card's top edge.
      </p>
    </CardContent>
  </Card>
);

export const WithAList = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle className="text-xl">What is included</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        <li className="flex items-start p-3 bg-muted rounded-md text-sm">
          Storyboard and script, reviewed with your SMEs
        </li>
        <li className="flex items-start p-3 bg-muted rounded-md text-sm">
          Interactive build with custom scoring
        </li>
        <li className="flex items-start p-3 bg-muted rounded-md text-sm">
          SCORM or xAPI package, tested on your LMS
        </li>
      </ul>
    </CardContent>
  </Card>
);

export const CenteredCallToAction = () => (
  <Card className="max-w-md bg-gradient-to-br from-primary/10 to-secondary/10">
    <CardContent className="pt-6 text-center space-y-4">
      <p className="text-muted-foreground leading-relaxed">
        Have a project in mind? I am usually booking two months out.
      </p>
      <Button size="lg" className="w-full">Start a conversation</Button>
    </CardContent>
  </Card>
);
