import { getWritingsByPage } from '~/server/db/writings'

export default defineEventHandler(async (event) => {
  const page = Number(event.context.params?.page)
  if (!page) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a page.',
    })
  }
  let prismaQuery = {
    skip: (page - 1) * 5,
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    where: {},
  }
  if (!(event.context.user)) {
    prismaQuery = {
      ...prismaQuery,
      where: {
        published: true,
      },
    }
  }
  const writings = await getWritingsByPage(prismaQuery)
  return writings
})
