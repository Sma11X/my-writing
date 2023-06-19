import { getWritingById } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a id.',
    })
  }
  const writing = await getWritingById(id)
  if (writing === null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Writing not found.',
    })
  }
  return writing
})
