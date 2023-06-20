import { updateWriting } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)
  const { title, content } = body

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a id.',
    })
  }
  if (!title || !content) {
    return createError({
      statusCode: 400,
      message: 'Title and content are required',
    })
  }

  const writingData = {
    title, content,
  }
  const writing = await updateWriting(id, writingData)
  return writing
})
