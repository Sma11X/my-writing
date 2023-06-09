import { createUser } from '~/server/db/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username, password } = body
  const userData = {
    username, password,
  }
  if (!username || !password)
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))

  const user = await createUser(userData)

  return { body: user }
})
