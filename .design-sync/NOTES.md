# design-sync notes — m-design

Repo-specific gotchas for future `/design-sync` runs. Read this first.

## Shape and scope

- Shape is `package` (pinned in `config.json`). There is no Storybook anywhere in
  the repo — no `.storybook/` dir and no `*.stories.*` files. Don't re-detect.
- This repo is a **Vite application**, not a published component library. It has
  no library build and no `dist/` entry of its own, and no TypeScript at all.
- Synced scope (user's choice on the first run): the shadcn-style UI layer plus
  the reusable shared components. The portfolio page sections
  (`HeroSection`, `ProjectsSection`, `AboutSection`, `ContactSection`,
  `WhatIDoSection`, `PlaygroundSection`) are deliberately **excluded** — they are
  one-off page compositions, not reusable parts. `ScrollToTop` is also excluded:
  it renders `null` and only exists for router side effects.

## The DS entry (why these files exist)

Because there is no library build, the sync adds one:

- `.design-sync/ds-entry.js` — re-exports the real shipped components (nothing is
  reimplemented) plus `LanguageProvider`/`useLanguage`, and imports
  `@/index.css` so the lib build emits compiled Tailwind alongside the JS.
- `.design-sync/vite.ds.config.js` — Vite library build producing
  `.design-sync/.cache/dist/index.es.js` + `style.css`.
  - `publicDir: false` is **required**: the app's `public/` tree is ~100 MB of
    challenge assets and Vite will otherwise copy all of it into the output dir.
  - React is externalized so preview cards use the bundle's `_vendor/` React.

Run order for a re-sync:

```sh
npm ci
npx vite build --config .design-sync/vite.ds.config.js     # cfg.buildCmd
node .ds-sync/package-build.mjs --config .design-sync/config.json \
  --node-modules ./node_modules \
  --entry ./.design-sync/.cache/dist/index.es.js --out ./ds-bundle
node .ds-sync/package-validate.mjs ./ds-bundle
```

## Discovery quirks

- `exportedNames()` finds **0** components here (it reads `.d.ts`, and this repo
  ships none). Every component therefore has to be listed explicitly in
  `cfg.componentSrcMap` — that map is the whole component list, not a set of
  exceptions. Adding a component to the sync means adding it there.
- Group derivation lands everything in `general`: the converter strips generic
  path segments, and `components`, `ui` and `src` are all on its generic list, so
  nothing is left to name a group. Grouping has to come from docs frontmatter
  (`cfg.docsDir` / `cfg.docsMap`), not from the source tree layout.
- `cfg.tsconfig` points at `jsconfig.json` — same `compilerOptions.paths` shape,
  and it is what resolves the `@/*` alias.

## Provider

`cfg.provider` is `LanguageProvider`. `Header` and `Footer` call `useLanguage()`,
which **throws** outside the provider ("useLanguage must be used within a
LanguageProvider"), so previews render blank without it. The provider defaults to
`language: 'en'`.

## Known issues

- **No prop types anywhere.** The repo is plain `.jsx`, so every generated
  `<Name>.d.ts` comes out as `[key: string]: unknown` — an empty API contract.
  Hand-written `cfg.dtsPropsFor` bodies are the only fix, and they are the single
  highest-value thing in this config: the `.d.ts` is what the design agent codes
  against.
- `tailwind.config.js` `content` includes `./.design-sync/previews/**` so classes
  used only in authored preview files still get compiled into `style.css`.
  Removing that glob silently drops those utilities and previews render unstyled.

## Re-sync risks

- **Tailwind is content-scanned.** `style.css` only contains utilities that appear
  in scanned files. A preview using a class no source file uses needs the previews
  glob above; a class built by string concatenation is never emitted at all.
- **Fonts.** The DS ships no webfonts — `src/index.css` sets the body font to the
  `ui-sans-serif`/system stack. Any `[FONT_MISSING]` warning is expected and not a
  regression.
- **Dep versions are unpinned by caret** in `package.json` (Radix, framer-motion,
  lucide-react). A fresh `npm ci` uses `package-lock.json`, so output stays
  deterministic — but a lockfile refresh can move component internals.
- **`window.MDesign`** is the global name. Changing `globalName` invalidates every
  uploaded preview card.
