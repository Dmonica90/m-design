import { NumberedList, NumberedListItem } from 'web-app';

// NumberedListItem only makes sense inside its list — the counter comes from
// the item's position, so every cell shows it in that composition.

export const TitleAndBody = () => (
  <div className="max-w-lg">
    <NumberedList>
      <NumberedListItem title="Elige un proyecto real">
        El título es la línea en negrita; los children son la copia de apoyo.
      </NumberedListItem>
      <NumberedListItem title="Haz el Canvas">
        Negocio, audiencia y experiencia en una sola vista.
      </NumberedListItem>
    </NumberedList>
  </div>
);

export const TitleOnly = () => (
  <div className="max-w-lg">
    <NumberedList>
      <NumberedListItem title="Sin copia de apoyo" />
      <NumberedListItem title="La lista queda compacta" />
      <NumberedListItem title="Útil para índices de fases" />
    </NumberedList>
  </div>
);

export const AutoNumbering = () => (
  <div className="max-w-lg">
    <NumberedList>
      <NumberedListItem title="Primero" />
      <NumberedListItem title="Segundo" />
      <NumberedListItem title="Tercero" />
      <NumberedListItem title="Cuarto — el número sale de la posición" />
    </NumberedList>
  </div>
);
