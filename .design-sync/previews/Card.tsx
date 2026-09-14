import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'web-app';

export const Tones = () => (
  <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
    <Card tone="primary">
      <CardHeader>
        <CardTitle>Primary</CardTitle>
        <CardDescription>Azul claro, el tono de base.</CardDescription>
      </CardHeader>
    </Card>
    <Card tone="secondary">
      <CardHeader>
        <CardTitle>Secondary</CardTitle>
        <CardDescription>Magenta, para lo que debe destacar.</CardDescription>
      </CardHeader>
    </Card>
    <Card tone="tertiary">
      <CardHeader>
        <CardTitle>Tertiary</CardTitle>
        <CardDescription>Azul profundo.</CardDescription>
      </CardHeader>
    </Card>
    <Card tone="plain">
      <CardHeader>
        <CardTitle>Plain</CardTitle>
        <CardDescription>Blanca, con filete — nunca invisible.</CardDescription>
      </CardHeader>
    </Card>
  </div>
);

export const Basic = () => (
  <Card tone="primary" className="max-w-md">
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
  <Card tone="secondary" className="max-w-md">
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
    <Card tone="primary">
      <CardHeader>
        <CardTitle className="text-xl">Instructional design</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Turning dense compliance material into something worth finishing.
        </p>
      </CardContent>
    </Card>
    <Card tone="tertiary">
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
