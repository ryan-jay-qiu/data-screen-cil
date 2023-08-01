import * as esbuild from 'esbuild'
await esbuild.build({
  bundle: true,
  entryPoints: ['index.mjs'],
  outfile: 'dist/bundle.cjs',
  platform: 'node',
  format: 'cjs',
})