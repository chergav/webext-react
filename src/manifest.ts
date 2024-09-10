import { defineManifest } from '@crxjs/vite-plugin';
import pkg from '../package.json';

export default defineManifest(async () => ({
	manifest_version: 3,
	name: '__MSG_appName__',
	version: pkg.version,
	description: '__MSG_appDesc__',
	default_locale: 'en',
	minimum_chrome_version: '93',
	icons: {
		16: 'src/icons/16.png',
		32: 'src/icons/32.png',
		48: 'src/icons/48.png',
		128: 'src/icons/128.png',
	},
	action: {
		default_title: '__MSG_appName__',
		default_popup: 'src/action/index.html',
		default_icon: {
			16: 'src/icons/16.png',
			24: 'src/icons/24.png',
			32: 'src/icons/32.png',
		},
	},
	content_scripts: [{
		matches: ['<all_urls>'],
		run_at: 'document_end',
		js: ['src/content/main.tsx'],
	}],
	options_ui: {
		page: 'src/options/index.html',
		open_in_tab: true,
	},
	background: {
		service_worker: 'src/background/index.ts',
		type: 'module',
	},
	web_accessible_resources: [
		{
			resources: ['src/icons/*'],
			matches: ['<all_urls>'],
		},
	],
	permissions: [],
	host_permissions: ['<all_urls>'],
}));
