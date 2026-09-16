import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'web-app';

export const UnderATitle = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Waste sorting course</CardTitle>
      <CardDescription>
        Twelve interactive modules, available in Spanish and English.
      </CardDescription>
    </CardHeader>
  </Card>
);

export const LongerCopy = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Museo 8M</CardTitle>
      <CardDescription>
        A browser game where players walk a gallery collecting artefacts from Ada
        Lovelace, Grace Hopper, Susan Kare and Jane McGonigal — built for
        International Women's Day.
      </CardDescription>
    </CardHeader>
  </Card>
);

export const StandaloneInContent = () => (
  <Card className="max-w-md">
    <CardContent className="pt-6 space-y-2">
      <CardDescription>Last updated 14 September</CardDescription>
      <p className="text-foreground">
        The description style also works as standalone metadata.
      </p>
    </CardContent>
  </Card>
);
