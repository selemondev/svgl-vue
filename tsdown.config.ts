import { defineConfig } from 'tsdown';
import Vue from 'unplugin-vue/rolldown';
export default defineConfig({
	entry: ['./src/index.ts'],
	treeshake: false,
	dts: {
		vue: true,
	},
	platform: 'browser',
	plugins: [Vue({ isProduction: true })],
	exports: true,
});
