import type { Ctx } from '@milkdown/ctx'
import { editorViewOptionsCtx } from '@milkdown/core'

import 'prosemirror-view/style/prosemirror.css'
import 'prosemirror-tables/style/tables.css'

// import '~/assets/milkdownTheme.css'

export default function myThemeConfig(ctx: Ctx) {
  ctx.update(editorViewOptionsCtx, prev => ({
    ...prev,
    attributes: {
      class: 'milkdown milkdown-theme-nord',
    },
  }))
}
