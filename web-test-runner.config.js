import {esbuildPlugin} from '@web/dev-server-esbuild'

export default {
  files: ['tests/**/*'],
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true, target: 'auto'})],
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <h1></h1>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
}
