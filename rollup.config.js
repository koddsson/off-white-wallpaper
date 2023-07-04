import {rollupPluginHTML as html} from '@web/rollup-plugin-html'
import esbuild from 'rollup-plugin-esbuild'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import postcss from 'postcss';

import postCssConfig from './postcss.config.js'

export default {
  input: 'index.html',
  output: {dir: 'dist'},
  plugins: [
    nodeResolve(),
    esbuild(),
    html({
      input: 'index.html',
      transformAsset: [
        async (content, filePath) => {
          if (filePath.endsWith('css')) {
            return (
              await postcss(postCssConfig.plugins).process(content.toString('utf-8'), {from: undefined, to: undefined})
            ).css
          }
        },
      ],
    }),
  ],
}
