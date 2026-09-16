// Library build used only by /design-sync: compiles .design-sync/ds-entry.js
// into a stable ESM entry + compiled Tailwind stylesheet the converter can
// consume. Output is gitignored build state under .design-sync/.cache/dist/.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default defineConfig({
	root,
	// The app's public/ tree is ~100MB of challenge assets — never copy it here.
	publicDir: false,
	plugins: [react()],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: { '@': path.resolve(root, 'src') },
	},
	build: {
		outDir: path.resolve(root, '.design-sync/.cache/dist'),
		emptyOutDir: true,
		cssCodeSplit: false,
		minify: false,
		lib: {
			entry: path.resolve(root, '.design-sync/ds-entry.js'),
			formats: ['es'],
			fileName: () => 'index.es.js',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
			output: { assetFileNames: 'style.css' },
		},
	},
});
