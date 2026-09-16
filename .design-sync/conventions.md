# Building with m-design

m-design is the design system behind PLAYCRAFT — interactive learning design.
Its character is specific and worth getting right: **flat tinted surfaces, one
magenta accent per screen, numbered section markers, and occasional full-bleed
navy sections that say one thing loudly.** It is not a generic card-and-shadow
UI kit; if a design comes out looking like default Bootstrap, something has gone
wrong.

## Setup

Import everything by name from the package root. There is **no provider to wrap
your app in** — no theme context, no i18n context. Components read nothing from
React context, so any component renders correctly on its own:

```jsx
import { SectionWrapper, Eyebrow, Heading, FeatureCard, Callout } from 'm-design';
```

Two things must be on the page for anything to look right:

- **`styles.css`** — the tokens, the fonts and the component CSS. Everything
  visual lives here.
- **`<Toaster />`** rendered once near the root, if you use `toast()`.

Colour and shape come from CSS custom properties on `:root`. Add `class="dark"`
to an ancestor to flip to the dark theme; the token names are the entire
contract, so nothing else changes.

## The styling idiom: Tailwind utilities over token colours

Style with Tailwind utility classes. **Never use a raw Tailwind palette colour**
(`bg-sky-500`, `text-slate-600`, `bg-pink-100`) — those are not part of this
system and will look foreign. Use only these colour names:

| Family | Names |
|---|---|
| Ground + ink | `background`, `foreground` |
| Surfaces | `card`, `popover`, `muted`, `accent` (each with a `-foreground`) |
| Brand | `primary` (light blue), `secondary` (magenta), `tertiary` (deep blue) |
| Dark ground | `surface-deep`, `surface-deep-foreground` |
| Lines + focus | `border`, `input`, `ring` |
| Status | `destructive` |

Each works with every prefix: `bg-primary`, `text-secondary`, `border-tertiary`,
`from-primary`, `ring-ring`. Partial opacity is available at
`/5 /10 /20 /50 /80 /90` — `bg-primary/10` is the standard tinted panel.

Corners come from `--radius` (1rem): use `rounded-lg`. Type is Poppins via
`--font-sans`; you never set it directly.

### Three rules that carry the look

1. **Surfaces are flat and tinted, not white and shadowed.** Reach for
   `bg-primary/10`, `bg-secondary/10`, `bg-tertiary/10` and `bg-muted`. Add a
   shadow only for something that genuinely floats.
2. **Magenta is an accent, never a fill.** It belongs on section numbers, one
   highlighted phrase per heading, and list markers. A magenta-filled panel
   larger than a badge is almost always wrong.
3. **`text-white` on `bg-primary` is a bug.** `--primary-foreground` is
   near-black because white on this blue is 2.7:1 and fails WCAG AA. Use
   `text-primary-foreground`.

## The section pattern

Almost every page is a stack of `SectionWrapper`s, each numbered in sequence,
each heading carrying one magenta phrase. Break the rhythm with a `Statement`.

```jsx
<SectionWrapper
  id="services"
  number="02"
  title={<>Interactive learning, <span className="text-secondary">end to end.</span></>}
  subtitle="From the first storyboard to the SCORM package."
>
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

  <Callout tone="tip" className="mt-10">
    El Canvas no es un documento, es una conversación estructurada.
  </Callout>
</SectionWrapper>
```

Note the `tone` rotating across the `FeatureCard` row — that is how a page gets
colour without any one element shouting.

For a dark break, everything inside takes `tone="onDeep"`:

```jsx
<Statement align="center">
  <Heading level={1} tone="onDeep">
    Stop designing courses.{' '}
    <span className="text-secondary">Start crafting experiences.</span>
  </Heading>
</Statement>
```

## Where the truth is

- **`_ds/<folder>/styles.css`** and the files it imports — the tokens and every
  class that exists. Read it before inventing a class name.
- **`components/<group>/<Name>/<Name>.prompt.md`** — per-component usage, with
  worked examples.
- **`components/<group>/<Name>/<Name>.d.ts`** — the exact prop contract.

Groups: `primitives` (Badge, Button, Card + parts, Eyebrow, FeatureCard, Heading,
Input, NumberedList + NumberedListItem, Text, Textarea), `layout` (Container,
SectionWrapper, Statement), `navigation` (SiteHeader, SiteFooter), `feedback`
(Callout, Toast + parts, Toaster), `overlay` (ImageLightbox).
