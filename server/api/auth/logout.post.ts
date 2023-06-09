export default defineEventHandler(async (event) => {
  if (!(event.context.user)) {
    return createError({
      statusCode: 401,
      message: 'You don\'t have the rights to access this resource',
    })
  }
  const config = useRuntimeConfig()

  deleteCookie(event, config.cookieName, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
  })
  return {
    user: null,
  }
})
