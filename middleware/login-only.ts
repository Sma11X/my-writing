export default defineNuxtRouteMiddleware(async () => {
  const isLogin = useAuthUser()
  if (!isLogin.value)
    return navigateTo({ name: 'admin' })
})
