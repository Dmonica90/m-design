# design-sync notes — m-design

Repo-specific gotchas a future sync should know before touching anything.

## Shape of this repo

- This is an **app repo**, not a design-system package. The design system lives at
  `src/design-system/` and is built as a separate library into `dist-ds/` by
  `npm run build:ds` (`vite.config.ds.js` + `tailwind.ds.config.js`).
  `npm run build` builds the *site* into `dist/`. The two output dirs must stay
  separate — an earlier attempt shared `dist/` and the app build wiped the library.
- `vite.config.ds.js` sets `publicDir: false`. Without it Vite copies the whole of
  `public/` (the challenge games, ~100 files) into `dist-ds/`.
- `package.json` carries `module`/`types` pointing at `dist-ds/` purely so the
  converter can resolve the entry and the `.d.ts`. Vite ignores them for the app.
- **The app does NOT consume the design system, deliberately.** The portfolio is
  left exactly as it was; the design system is a separate deliverable that keeps
  its own copies of the components it was extracted from. `grep -rn "@/design-system" src/`
  outside `src/design-system/` should return nothing, and the design system
  imports nothing from the app — the two are independent by design.
  The consequence to accept: the two sets of components can drift. If the app is
  ever migrated onto the system, that is a separate, deliberate piece of work.
- **`tailwind.config.js` belongs to the app and must stay untouched.** The design
  system's theme additions (`tertiary`, `surface-deep`, `--font-sans`) live in
  `tailwind.ds.config.js`, which borrows the app's base theme and extends it.

## The stylesheet safelist is load-bearing

`tailwind.ds.config.js` carries a large `safelist`. **Do not trim it to save bytes.**
Rendered designs receive only `styles.css` and its import closure, so a utility the
design agent reaches for that is not in that file silently renders unstyled. Two
bugs found this way:

- With no safelist, scanning only `src/design-system/**` produced a 20 KB
  stylesheet with no `gap-6`, `grid-cols-2` or `max-w-md`. Preview grids collapsed
  into flush single columns. The safelist is what makes it safe for `content` to
  scan the design system alone — which it now does, so the app's own off-palette
  classes never leak into the shipped stylesheet.
- Token colours at partial opacity (`bg-primary/10`) are separate classes from the
  solid ones and were missing too — `bg-primary/10` panels rendered transparent.
  The alpha steps are deliberately limited to `5|10|20|50|80|90`; the full
  cross-product took the stylesheet to 765 KB.

## Tailwind does not scan dot-directories

`.design-sync/previews/**` can be listed in `content` and it will silently match
nothing — Tailwind's scanner skips directories starting with a dot. So **previews
must stick to safelisted utilities or use inline styles**. An arbitrary value like
`min-h-[420px]` written in a preview does not exist in the CSS, which presents as a
zero-height stage and a card that looks blank for no visible reason. The glob is
left out of the config on purpose, with a comment.

## Previews that need a Stage

Three components are `position: fixed` and enter with a framer-motion animation
that never settles in a still capture. Each preview wraps them in a local `Stage`;
this is preview-only scaffolding and changes nothing about the components.

- **`SiteHeader`** — `fixed`, and enters from `y: -100`. Cells pass
  `className="static"` (cn/twMerge lets the caller's position class win) and the
  Stage carries a CSS rule neutralising the transform. `MotionConfig
  reducedMotion="always"` was tried first and did **not** work.
- **`ImageLightbox`** and **`Toaster`** — `fixed`, and take no `className`. Their
  Stage sets `transform: translateZ(0)`, which makes it the containing block for
  fixed descendants, so the overlay fills the card instead of the window.
- **`Toast*`** — Radix portals into a fixed viewport. Previews render
  `ToastViewport` with `className="static …"` so the toast flows in place.

## Hubo una segunda configuración de sync en `main`

`main` llegó a tener su propio `.design-sync/` que sincronizaba los componentes de la
app directamente (`srcDir: "src"`, `provider: LanguageProvider`,
`componentSrcMap` apuntando a `src/components/ui/*`, `Header`, `Footer`), con
`buildCmd: npx vite build --config .design-sync/vite.ds.config.js`. Esta rama la
sustituye — `config.json` es un único archivo y no admite dos formas — y con ella se
borraron sus dos archivos de apoyo, `ds-entry.js` y `vite.ds.config.js`, que quedaron
huérfanos tras la fusión. Están en el historial si alguna vez hace falta volver.

**Cuidado con el nombre:** aquel `.design-sync/vite.ds.config.js` se parecía muchísimo
al `vite.config.ds.js` de la raíz, que es el que sí se usa.

De esa configuración sobrevive una línea en `tailwind.config.js`, que se deja estar
porque el archivo es de la app:

```js
'./.design-sync/previews/**/*.{js,jsx,ts,tsx}',   // no-op
```

**No hace nada.** Tailwind se salta los directorios que empiezan por punto (ver la
sección de arriba), así que ese glob no encuentra ningún archivo. Es inocuo —
`tailwind.ds.config.js` sobrescribe `content` de todos modos— pero no te fíes de él: si
un preview necesita una clase, tiene que estar en el safelist o ser un estilo en línea.

## Known render warns (expected — not new)

- `[FONT_REMOTE] "Poppins"` — the brand font loads from Google Fonts at runtime via
  an `@import` in the stylesheet. Informational, no action.

## Colour and typography decisions

- The palette is PLAYCRAFT's: `#F7F7F7` `#D904A0` `#29A5F2` `#304CBA` `#0D0D0D`.
- **`--primary-foreground` is near-black on purpose.** White on `#29A5F2` is 2.7:1
  and fails WCAG AA; near-black is 7.2:1. Anything that puts `text-white` on a
  `primary` background reintroduces the bug — use `text-primary-foreground`.
- `--surface-deep` (navy) is **not** one of the five swatches. It is derived from
  `#304CBA` to support the dark statement sections, which are half the character of
  the reference.
- `--destructive` stays red: the brand palette has no red and error states need one.
- **Poppins is a substitute**, chosen as the closest widely-available geometric sans
  to the reference's type. If PLAYCRAFT licenses a specific family, swap it in
  `--font-sans` and the two `@import` lines — nothing else references it.
- **Open accessibility item:** `bg-secondary/80`, the hover state of
  `Button variant="secondary"`, drops below 4.5:1 against white text. The resting
  state passes at 4.7:1. Worth revisiting if secondary buttons become common.

## Deliberate off-palette colours (leave them alone)

- `ContactSection.jsx`: `bg-green-500` (WhatsApp) and `bg-blue-600` (LinkedIn) are
  third-party brand colours; recolouring them hurts recognition.
- `ImageLightbox.jsx`: `bg-black/80`, `bg-white`, `text-white` are overlay chrome.
- `Toast.jsx`: the `red-*` classes on the destructive close button belong with
  `--destructive`.

## Verifying the two stay separate

Two cheap checks that the boundary still holds:

- `grep -rn "@/design-system" src/ --include=*.jsx --include=*.js | grep -v "^src/design-system/"`
  must be empty — the app must not import the system.
- `grep -rn "from '@/" src/design-system/` must be empty — the system must not
  import the app.
- `grep -c "text-slate-600\|bg-sky-100" dist-ds/design-system.css` must be 0 — the
  app's palette must not leak into the shipped stylesheet.

## Re-sync risks

- **Poppins and the palette are brand decisions, not derivations.** If the brand
  moves, `tokens.css` is the single place to change — but the *contrast* notes above
  need rechecking, because they are specific to these values.
- **`Statement` and the dark tokens are only lightly exercised.** The `.dark` block
  in `tokens.css` is written but no preview renders the whole system under `.dark`;
  only `Statement` uses `surface-deep`. A future sync that leans on dark mode should
  verify it properly.
- **Grades do not follow the palette.** The converter treats styling as pipeline
  churn, so a colour change carries old grades forward unchanged. Any future
  repalette must `package-capture.mjs --force` and regrade from fresh sheets.
- **The app was deliberately reverted.** An earlier pass repaletted the portfolio
  and recomposed four of its sections onto the new components; that was rolled
  back at the user's request, because the deliverable is the design system and the
  site was to be left alone. The components are proven to compose (the previews
  render them), but no page in this repo consumes them — so a future migration has
  no working reference in-tree beyond `.design-sync/previews/`.
- **`npm run lint` is broken on `main`**, before any of this work: the `globals`
  package trips ESLint with `Global "AudioWorkletGlobalScope " has leading or
  trailing whitespace`. Unrelated to the design system; verified by stashing.
