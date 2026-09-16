// Library build for the m-design design system.
//
// Separate from vite.config.js (which builds the portfolio app into dist/) so
// the two never overwrite each other: the design system emits to dist-ds/.
// Run it with `npm run build:ds`, which also compiles the stylesheet and
// copies the type declarations.
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	// The app's public/ assets belong to the site, not the library.
	publicDir: false,
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: { '@': path.resolve(__dirname, './src') },
	},
	build: {
		outDir: 'dist-ds',
		emptyOutDir: false, // the tailwind + d.ts steps also write here
		minify: false, // the converter re-bundles; readable output helps debugging
		lib: {
			entry: path.resolve(__dirname, 'src/design-system/index.js'),
			formats: ['es'],
			fileName: () => 'index.es.js',
		},
		rollupOptions: {
			// React is provided by the host app (and by the design-sync vendor
			// bundle). Everything else is bundled so the entry is self-contained.
			external: ['react', 'react-dom', 'react/jsx-runtime'],
		},
	},
});
