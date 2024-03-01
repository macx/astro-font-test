import { defineConfig } from 'astro/config';
import astroFont from '@gamesome/astro-font';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    astroFont({
      families: [
        {
          name: 'Open Sans Variable',
          imports: ['@fontsource-variable/open-sans/wdth.css'],
        },
        {
          name: 'Domine Variable',
          type: 'sans-serif',
          applyFontFamilyToSelector: ':is(h1, h2, h3, h4)',
          imports: ['@fontsource-variable/domine/wght.css'],
        },
        {
          name: 'JetBrains Mono Variable',
          type: 'mono',
          fallbacks: ['Courier New'],
          applyFontFamilyToSelector: 'code',
          imports: ['@fontsource-variable/jetbrains-mono/wght.css'],
        },
      ],
    }),
  ],
});
