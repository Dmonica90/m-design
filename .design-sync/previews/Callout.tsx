import { Callout } from 'web-app';
import { Lightbulb, HelpCircle, AlertTriangle } from 'lucide-react';

export const Tones = () => (
  <div className="space-y-4 max-w-2xl">
    <Callout tone="info">
      Que un curso sea digital no lo hace una buena experiencia.
    </Callout>
    <Callout tone="tip" icon={<Lightbulb className="h-5 w-5" />}>
      El Canvas no es un documento, es una conversación estructurada.
    </Callout>
    <Callout tone="accent" icon={<HelpCircle className="h-5 w-5" />}>
      ¿Para quién estamos diseñando, qué necesitan, y qué debería cambiar en
      ellos al terminar?
    </Callout>
    <Callout tone="muted" icon={<AlertTriangle className="h-5 w-5" />}>
      No medimos calidad por número de pantallas ni animaciones.
    </Callout>
  </div>
);

export const WithTitle = () => (
  <div className="max-w-2xl">
    <Callout tone="tip" title="La pregunta que sostiene todo lo demás" icon={<Lightbulb className="h-5 w-5" />}>
      Una experiencia tiene ritmo, progresión y un propósito. No es sólo una
      secuencia de pantallas.
    </Callout>
  </div>
);

export const LongerCopy = () => (
  <div className="max-w-2xl">
    <Callout tone="info">
      La metodología es un mapa. El mindset es la brújula. Puedes seguir cada
      fase al pie de la letra y aun así diseñar algo vacío si no entiendes por
      qué existen estas cuatro ideas.
    </Callout>
  </div>
);
