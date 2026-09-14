import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'web-app';

export const Basic = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Gamified safety onboarding</CardTitle>
      <CardDescription>Six modules for warehouse field technicians.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">
        Built in Storyline with a custom JavaScript scoring layer, branching
        scenarios and a printable completion certificate.
      </p>
    </CardContent>
  </Card>
);

export const WithFooter = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Museo 8M</CardTitle>
      <CardDescription>A side-scrolling museum about women in computing.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">
        Players walk a gallery collecting artefacts from Ada Lovelace, Grace
        Hopper and Susan Kare.
      </p>
    </CardContent>
    <CardFooter className="gap-3">
      <Button size="sm">Play it</Button>
      <Button size="sm" variant="outline">
        Read the notes
      </Button>
    </CardFooter>
  </Card>
);

export const Grid = () => (
  <div className="grid sm:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Instructional design</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Turning dense compliance material into something worth finishing.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Interactive build</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Storyline, JavaScript and web builds that behave like small games.
        </p>
      </CardContent>
    </Card>
  </div>
);

export const OnBrandGradient = () => (
  <Card className="max-w-md bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
    <CardContent className="text-center space-y-4 p-0">
      <p className="text-muted-foreground leading-relaxed">
        Have a project in mind? I am usually booking two months out.
      </p>
      <Button size="lg" className="w-full">
        Start a conversation
      </Button>
    </CardContent>
  </Card>
);
