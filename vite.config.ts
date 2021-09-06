import { defineConfig } from 'vite'

import { minifyHtml, injectHtml } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    minifyHtml(),
    injectHtml({
      data: {
        title: 'vite-plugin-html-example',
        injectScript: '<script src="./inject.js"></script>',
      },
    }),
  ],
})