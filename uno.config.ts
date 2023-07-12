import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded-2xl inline-block cursor-pointer bg-gray-200 hover:bg-gray-100 dark:bg-nord3 hover:dark:bg-nord1'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['nav-btn', 'rounded-full hover:bg-nord6 dark:hover:bg-nord1 fill-gray-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography({
      cssExtend: {
        'blockquote': {
          'font-style': 'normal',
        },
        'blockquote p': {
          color: 'var(--blockquote-color)',
        },
        'a': {
          'text-decoration': 'none',
        },
        'pre,code': {
          background: 'var(--code-bg)',
        },
        ':not(pre) > code::before,:not(pre) > code::after': {
          content: '" "',
        },
        '.prose :where(ul > li):not(:where(.not-prose,.not-prose *))::marker': {
          color: 'var(--font-base)',
        },
        '.prose :where(details):not(:where(.not-prose,.not-prose *))': {
          background: 'transparent',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      nord0: '#2E3440',
      nord1: '#3B4252',
      nord2: '#434C5E',
      nord3: '#4C566A',
      nord4: '#D8DEE9',
      nord5: '#E5E9F0',
      nord6: '#ECEFF4',
      nord7: '#8FBCBB',
      nord8: '#88C0D0',
      nord9: '#81A1C1',
      nord10: '#5E81AC',
      nord11: '#BF616A',
      nord12: '#D08770',
      nord13: '#EBCB8B',
      nord14: '#A3BE8C',
      nord15: '#B48EAD',
    },
  },
})
