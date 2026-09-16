import { Eyebrow, Heading, Text } from 'web-app';

export const Numbered = () => (
  <div className="space-y-8">
    <Eyebrow number="01">El problema</Eyebrow>
    <Eyebrow number="02">El mindset</Eyebrow>
    <Eyebrow number="03">Las siete fases</Eyebrow>
  </div>
);

export const Sizes = () => (
  <div className="space-y-8">
    <Eyebrow number="04" size="lg">La fase 1</Eyebrow>
    <Eyebrow number="04" size="md">La fase 1</Eyebrow>
    <Eyebrow number="04" size="sm">La fase 1</Eyebrow>
  </div>
);

export const Tones = () => (
  <div className="space-y-8">
    <Eyebrow number="05" tone="secondary">Magenta, el acento por defecto</Eyebrow>
    <Eyebrow number="05" tone="primary">Azul claro</Eyebrow>
    <Eyebrow number="05" tone="tertiary">Azul profundo</Eyebrow>
  </div>
);

export const OpeningASection = () => (
  <div className="max-w-2xl space-y-5">
    <Eyebrow number="01">El problema</Eyebrow>
    <Heading level={2}>
      Seguimos diseñando cursos,{' '}
      <span className="text-secondary">no experiencias.</span>
    </Heading>
    <Text tone="muted" size="lg">
      La capacitación digital sigue la misma fórmula: información, diapositivas,
      video, quiz, completado.
    </Text>
  </div>
);

export const LabelOnly = () => (
  <div className="space-y-6">
    <Eyebrow>Tú como estratega</Eyebrow>
    <Eyebrow labelTone="secondary">El reto</Eyebrow>
  </div>
);
