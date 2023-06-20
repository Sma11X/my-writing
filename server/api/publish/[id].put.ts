import { publishWriting } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a id.',
    })
  }

  const res = await publishWriting(id)
  return res
})
