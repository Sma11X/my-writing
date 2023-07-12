import { publishWriting } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)
  const { published } = body

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a id.',
    })
  }

  const res = await publishWriting(id, published)
  return res
})
