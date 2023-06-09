import { getUserByUsername } from '~/server/db/user'
import { verify } from '~/server/utils/password'
import { serialize, sign } from '~/server/utils/session'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ username: string; password: string }>(event)

  const {
    username,
    password,
  } = body

  if (!username || !password) {
    return createError({
      statusCode: 400,
      message: 'Email address and password are required',
    })
  }

  const userWithPassword = await getUserByUsername(username)

  if (!userWithPassword) {
    return createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  const verified = await verify(password, userWithPassword.password)

  if (!verified) {
    return createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  const config = useRuntimeConfig()

  const session = serialize({ userId: userWithPassword.id })
  const signedSession = sign(session, config.cookieSecret)

  setCookie(event, config.cookieName, signedSession, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    expires: new Date(Date.now() + config.cookieExpires),
  })

  const { password: _password, ...userWithoutPassword } = userWithPassword

  return {
    user: userWithoutPassword,
  }
})
