import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest';
import packageJson from './package.json';

export default defineConfig({
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
	},
	plugins: [
		react(),
		crx({ manifest }),
	],
	define: {
		__NAME__: JSON.stringify(packageJson.name),
	},
});
