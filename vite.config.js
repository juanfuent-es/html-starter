import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        js: 'js.html',
        css: 'css.html',
        html: 'html.html',
        poo: 'poo.html',
        docs: 'docs.html',
        sheet: 'cheat-sheet.html',
        net: 'centro-net.html',
        altt: 'alt-me.html',
      }
    }
  }
});