import { FeatureCard } from 'web-app';
import { Compass, Map, Target, Lightbulb } from 'lucide-react';

export const ARow = () => (
  <div className="grid sm:grid-cols-3 gap-6">
    <FeatureCard tone="secondary" icon={<Compass className="h-6 w-6" />} title="Behavior">
      ¿Qué debe hacer o cambiar la persona?
    </FeatureCard>
    <FeatureCard tone="primary" icon={<Map className="h-6 w-6" />} title="Journey">
      ¿Cómo lo va a vivir, momento a momento?
    </FeatureCard>
    <FeatureCard tone="tertiary" icon={<Target className="h-6 w-6" />} title="Economy">
      ¿Qué valor genera para el negocio?
    </FeatureCard>
  </div>
);

export const Tones = () => (
  <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
    <FeatureCard tone="primary" title="Primary">Azul claro, el tono de base.</FeatureCard>
    <FeatureCard tone="secondary" title="Secondary">Magenta, para lo que debe destacar.</FeatureCard>
    <FeatureCard tone="tertiary" title="Tertiary">Azul profundo, para equilibrar la fila.</FeatureCard>
    <FeatureCard tone="muted" title="Muted">Gris, cuando el color ya trabaja en otro sitio.</FeatureCard>
  </div>
);

export const WithEyebrowAndList = () => (
  <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
    <FeatureCard
      tone="secondary"
      eyebrow="Fase 1"
      icon={<Lightbulb className="h-6 w-6" />}
      title="Setup y contexto"
    >
      <ul className="space-y-1.5">
        <li>Cuál es el problema real</li>
        <li>Para quién diseñamos</li>
        <li>Qué limita la solución</li>
      </ul>
    </FeatureCard>
    <FeatureCard
      tone="primary"
      eyebrow="Fase 2"
      icon={<Compass className="h-6 w-6" />}
      title="PlayCraft Canvas"
    >
      <ul className="space-y-1.5">
        <li>Negocio, audiencia, experiencia</li>
        <li>Una sola vista compartida</li>
        <li>Decisiones que sí encajan</li>
      </ul>
    </FeatureCard>
  </div>
);

export const TextOnly = () => (
  <div className="max-w-sm">
    <FeatureCard tone="muted" title="Sin icono">
      El icono es opcional — sin él la tarjeta sigue siendo una superficie plana
      teñida con un título y su copia.
    </FeatureCard>
  </div>
);
