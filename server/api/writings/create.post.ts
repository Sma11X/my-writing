import { createWriting } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { title, content } = body

  if (!title || !content) {
    return createError({
      statusCode: 400,
      message: 'Title and content are required',
    })
  }

  const writingData = {
    title, content,
  }
  const writing = await createWriting(writingData)
  return { ...writing }
})
