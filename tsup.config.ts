import { defineConfig } from 'tsup'
import vuePlugin from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: ['src/index.ts'],       
  format: ['esm'],               
  splitting: false,              
  sourcemap: false,              
  clean: true,                               
  dts: false,                                   
  external: ['vue'],                        
  esbuildPlugins: [
    vuePlugin({
      isProduction: true,
    }),
  ],
})