export default defineNuxtRouteMiddleware((from) => {
  if (!from.params.page)
    return navigateTo('/writings/1')
})
