import { Heading, NumberedList, NumberedListItem } from 'web-app';

export const Steps = () => (
  <div className="max-w-lg">
    <NumberedList>
      <NumberedListItem title="Elige un proyecto real">
        O un reto de tu día a día — no un ejercicio para entregar.
      </NumberedListItem>
      <NumberedListItem title="Haz el Canvas">
        Negocio, audiencia y experiencia en una sola vista.
      </NumberedListItem>
      <NumberedListItem title="Recorre las fases">
        Cada fase responde una pregunta que la siguiente necesita.
      </NumberedListItem>
      <NumberedListItem title="Aplica el mindset">
        Intención antes que interacción.
      </NumberedListItem>
    </NumberedList>
  </div>
);

export const TitlesOnly = () => (
  <div className="max-w-lg">
    <NumberedList>
      <NumberedListItem title="Setup y contexto" />
      <NumberedListItem title="PlayCraft Canvas" />
      <NumberedListItem title="Diseño de la experiencia" />
      <NumberedListItem title="Behavior + Journey + Economy" />
      <NumberedListItem title="Crear y construir" />
      <NumberedListItem title="Testear" />
      <NumberedListItem title="Evolucionar" />
    </NumberedList>
  </div>
);

export const Tones = () => (
  <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
    <NumberedList tone="secondary">
      <NumberedListItem title="Magenta" />
      <NumberedListItem title="El marcador por defecto" />
    </NumberedList>
    <NumberedList tone="tertiary">
      <NumberedListItem title="Azul profundo" />
      <NumberedListItem title="Para listas secundarias" />
    </NumberedList>
  </div>
);

export const UnderAHeading = () => (
  <div className="max-w-lg space-y-6">
    <Heading level={3}>
      Diseña tu primera <span className="text-secondary">experiencia.</span>
    </Heading>
    <NumberedList>
      <NumberedListItem title="Elige el reto" />
      <NumberedListItem title="Haz el Canvas" />
      <NumberedListItem title="Recorre las fases" />
    </NumberedList>
  </div>
);
