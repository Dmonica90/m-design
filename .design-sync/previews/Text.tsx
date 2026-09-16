import { Heading, Text } from 'web-app';

export const Sizes = () => (
  <div className="max-w-xl space-y-4">
    <Text size="lg">
      Large — section intros and lead paragraphs that need to carry weight.
    </Text>
    <Text size="base">
      Base — the default for body copy across the site, set at a relaxed line
      height so long passages stay readable.
    </Text>
    <Text size="sm">Small — captions, helper text and metadata.</Text>
  </div>
);

export const Tones = () => (
  <div className="max-w-xl space-y-4">
    <Text tone="foreground">Foreground — the default for body copy.</Text>
    <Text tone="muted">
      Muted — supporting copy, subtitles and anything that should recede.
    </Text>
    <Text tone="primary">Primary — reserved for emphasis, used sparingly.</Text>
  </div>
);

export const AParagraphBlock = () => (
  <div className="max-w-xl space-y-4">
    <Heading level={3}>About</Heading>
    <Text tone="muted">
      I am an Engineer in Interactive Technology with a background in digital
      animation, and I build eLearning that people actually finish.
    </Text>
    <Text tone="muted">
      Most of my work sits where instructional design meets game design: scored
      scenarios, branching decisions, and interfaces that reward curiosity.
    </Text>
  </div>
);

export const Inline = () => (
  <Text className="max-w-xl">
    Built with <Text as="span" tone="primary" className="font-semibold">Storyline</Text> and a
    custom <Text as="span" tone="primary" className="font-semibold">JavaScript</Text> layer.
  </Text>
);
