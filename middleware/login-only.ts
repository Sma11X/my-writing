export default defineNuxtRouteMiddleware(async () => {
  const isLogin = useAuthUser()
  if (!isLogin.value?.username)
    return navigateTo({ name: 'admin' })
})
