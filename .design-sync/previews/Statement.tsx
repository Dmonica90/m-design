import { Eyebrow, Heading, Statement, Text } from 'web-app';

export const ChapterOpener = () => (
  <Statement id="fase-1">
    <Eyebrow number="04" tone="onDeep" labelTone="onDeep" size="lg">
      La fase 1
    </Eyebrow>
    <Heading level={1} tone="onDeep">
      Setup y <span className="text-secondary">contexto.</span>
    </Heading>
    <Text tone="onDeep" size="lg" className="opacity-80">
      Entender el terreno antes de diseñar la ruta.
    </Text>
  </Statement>
);

export const Manifesto = () => (
  <Statement align="center">
    <Heading level={1} tone="onDeep">
      Stop designing courses.{' '}
      <span className="text-secondary">Start crafting experiences.</span>
    </Heading>
  </Statement>
);

export const WithBody = () => (
  <Statement>
    <Heading level={2} tone="onDeep">
      La tecnología sirve a lo que <span className="text-secondary">diseñamos.</span>
    </Heading>
    <Text tone="onDeep" size="lg" className="opacity-80">
      No al revés. Las herramientas cambian cada año; las preguntas que hacemos
      antes de abrirlas, no.
    </Text>
  </Statement>
);
