// Tailwind config for the design system's shippable stylesheet.
//
// The design system is self-contained: it borrows the app's base theme but owns
// everything specific to itself, so tailwind.config.js — which belongs to the
// portfolio site — stays untouched.
//
//  1. `content` scans ONLY src/design-system. The app has its own palette and
//     its classes must not leak into the shipped stylesheet.
//  2. `colors` adds the brand families the design system introduces.
//  3. `safelist` guarantees a baseline layout vocabulary even when no source
//     file happens to use it. Consumers of this stylesheet (the claude.ai/design
//     agent, and the preview cards) write their own layout glue; without a
//     safelist, a `gap-6` they reach for simply would not exist in the CSS and
//     the design would silently render unstyled.
const appConfig = require('./tailwind.config.js');

const RESPONSIVE = ['responsive'];

module.exports = {
	...appConfig,
	// Only the design system's own source. Preview files under .design-sync/ are
	// deliberately NOT listed: Tailwind's scanner skips dot-directories, so the
	// glob would silently do nothing — and preview code should not shape the
	// shipped stylesheet anyway. Previews stick to safelisted utilities or use
	// inline styles (see .design-sync/NOTES.md).
	content: ['./src/design-system/**/*.{js,jsx}'],
	theme: {
		...appConfig.theme,
		extend: {
			...appConfig.theme.extend,
			fontFamily: { sans: ['var(--font-sans)'] },
			colors: {
				...appConfig.theme.extend.colors,
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
				},
				'surface-deep': {
					DEFAULT: 'hsl(var(--surface-deep))',
					foreground: 'hsl(var(--surface-deep-foreground))',
				},
			},
		},
	},
	safelist: [
		// --- display + flexbox/grid structure ---------------------------------
		{ pattern: /^(flex|inline-flex|grid|inline-grid|block|inline-block|inline|hidden|contents)$/, variants: RESPONSIVE },
		{ pattern: /^flex-(row|row-reverse|col|col-reverse|wrap|nowrap|wrap-reverse|1|auto|initial|none)$/, variants: RESPONSIVE },
		{ pattern: /^(items|self)-(start|end|center|baseline|stretch)$/, variants: RESPONSIVE },
		{ pattern: /^(justify|content)-(start|end|center|between|around|evenly|stretch)$/, variants: RESPONSIVE },
		{ pattern: /^grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12|none)$/, variants: RESPONSIVE },
		{ pattern: /^grid-rows-(1|2|3|4|5|6|none)$/, variants: RESPONSIVE },
		{ pattern: /^col-span-(1|2|3|4|5|6|7|8|9|10|11|12|full)$/, variants: RESPONSIVE },
		{ pattern: /^row-span-(1|2|3|4|5|6|full)$/, variants: RESPONSIVE },
		{ pattern: /^order-(1|2|3|4|5|6|first|last|none)$/, variants: RESPONSIVE },

		// --- spacing ----------------------------------------------------------
		{ pattern: /^(gap|gap-x|gap-y)-(0|px|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|16|20|24)$/, variants: RESPONSIVE },
		{ pattern: /^(p|px|py|pt|pr|pb|pl)-(0|px|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|16|20|24|32)$/, variants: RESPONSIVE },
		{ pattern: /^(m|mx|my|mt|mr|mb|ml)-(0|px|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|16|20|24|auto)$/, variants: RESPONSIVE },
		{ pattern: /^(space-x|space-y)-(0|px|1|1\.5|2|2\.5|3|3\.5|4|5|6|8|10|12)$/, variants: RESPONSIVE },

		// --- sizing -----------------------------------------------------------
		{ pattern: /^w-(full|screen|auto|fit|min|max|px|1\/2|1\/3|2\/3|1\/4|3\/4)$/, variants: RESPONSIVE },
		{ pattern: /^h-(full|screen|auto|fit|min|max|px|4|5|6|7|8|10|12|16|20|24)$/, variants: RESPONSIVE },
		{ pattern: /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|prose|none|screen-sm|screen-md|screen-lg|screen-xl)$/, variants: RESPONSIVE },
		{ pattern: /^(min-h|min-w)-(0|full|screen|fit)$/, variants: RESPONSIVE },

		// --- typography -------------------------------------------------------
		{ pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/, variants: RESPONSIVE },
		{ pattern: /^font-(thin|light|normal|medium|semibold|bold|extrabold|black)$/, variants: RESPONSIVE },
		{ pattern: /^text-(left|center|right|justify)$/, variants: RESPONSIVE },
		{ pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/, variants: RESPONSIVE },
		{ pattern: /^tracking-(tighter|tight|normal|wide|wider|widest)$/, variants: RESPONSIVE },
		{ pattern: /^(truncate|uppercase|lowercase|capitalize|italic|underline|line-through|no-underline)$/ },

		// --- token-backed colour ---------------------------------------------
		// These are the design system's colour vocabulary — the only colour names
		// a design built on m-design should ever use.
		{
			pattern: /^(bg|text|border|ring|fill|stroke|from|via|to)-(background|foreground|card|card-foreground|popover|popover-foreground|primary|primary-foreground|secondary|secondary-foreground|tertiary|tertiary-foreground|surface-deep|surface-deep-foreground|muted|muted-foreground|accent|accent-foreground|destructive|destructive-foreground|border|input|ring|transparent|current|white|black)$/,
			variants: ['responsive', 'hover', 'focus', 'focus-visible', 'group-hover'],
		},

		// Token colours at partial opacity. m-design leans on these for its tinted
		// surfaces (the page gradient is from-primary/10 to-secondary/10), so the
		// common alpha steps have to exist in the shipped stylesheet — a design
		// that reaches for bg-primary/10 must not come out unstyled.
		{
			pattern: /^(bg|text|border|from|via|to)-(foreground|card|primary|secondary|tertiary|surface-deep|muted|accent|destructive|black|white)\/(5|10|20|50|80|90)$/,
			variants: ['hover'],
		},

		// --- surfaces + decoration -------------------------------------------
		{ pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/, variants: RESPONSIVE },
		{ pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/, variants: ['responsive', 'hover'] },
		{ pattern: /^border(-(0|2|4|8|t|r|b|l))?$/, variants: RESPONSIVE },
		{ pattern: /^opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/, variants: ['responsive', 'hover'] },
		{ pattern: /^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/, variants: RESPONSIVE },
		{ pattern: /^(backdrop-blur|blur)(-(none|sm|md|lg|xl|2xl|3xl))?$/, variants: RESPONSIVE },
		{ pattern: /^object-(contain|cover|fill|none|scale-down)$/, variants: RESPONSIVE },
		{ pattern: /^overflow-(auto|hidden|visible|scroll)$/, variants: RESPONSIVE },

		// --- position ---------------------------------------------------------
		{ pattern: /^(static|fixed|absolute|relative|sticky)$/, variants: RESPONSIVE },
		{ pattern: /^(inset|top|right|bottom|left)-(0|auto|px|1|2|3|4|full)$/, variants: RESPONSIVE },
		{ pattern: /^z-(0|10|20|30|40|50|auto)$/, variants: RESPONSIVE },

		// --- interaction ------------------------------------------------------
		{ pattern: /^transition(-(none|all|colors|opacity|shadow|transform))?$/ },
		{ pattern: /^duration-(75|100|150|200|300|500|700|1000)$/ },
		{ pattern: /^cursor-(pointer|default|not-allowed|wait)$/ },
	],
};
