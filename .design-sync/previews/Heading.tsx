import { Heading } from 'web-app';

export const Levels = () => (
  <div className="space-y-6">
    <Heading level={1}>Monica Vázquez</Heading>
    <Heading level={2}>What I do</Heading>
    <Heading level={3}>Selected work</Heading>
    <Heading level={4}>Tools I reach for</Heading>
  </div>
);

export const Tones = () => (
  <div className="space-y-6">
    <Heading level={3} tone="primary">
      Brand blue — the default
    </Heading>
    <Heading level={3} tone="foreground">
      Foreground — for dense pages
    </Heading>
    <Heading level={3} tone="muted">
      Muted — for quiet section labels
    </Heading>
  </div>
);

export const InContext = () => (
  <div className="text-center space-y-4 max-w-2xl">
    <Heading level={2}>Interactive eLearning</Heading>
    <p className="text-lg text-muted-foreground leading-relaxed">
      Courses built to be played rather than clicked through — branching
      scenarios, real stakes, and a score that means something.
    </p>
  </div>
);
