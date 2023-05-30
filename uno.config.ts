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
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
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
