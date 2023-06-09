export function useAuthFetch<T>(url: string, options: any) {
  return $fetch<T>(url, {
    ...options,
    headers: useRequestHeaders(['cookie']) as HeadersInit,
  })
}
