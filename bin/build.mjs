import * as esbuild from 'esbuild'
await esbuild.build({
  bundle: true,
  entryPoints: ['index.mjs'],
  outfile: 'dist/main.cjs',
  platform: 'node',
  format: 'cjs',
  target: 'node14',
  // minify: true, // 开启代码压缩
}).then(()=>{
  console.log("-----打包完毕-----");
  process.exit(1);
}).catch((e) => {
  console.error(e);
  process.exit(1);
});