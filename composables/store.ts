import type { Writing } from '@prisma/client'
import type { UserWithoutPwd } from '~/types/IUser'

export interface StoreState {
  writings: Record<number, Writing[]>
  user: null | Record<string, UserWithoutPwd>
}

export function useStore() {
  return useState<StoreState>('store', () => ({
    writings: {},
    user: {},
  }))
}

export async function fetchWritings(page: number) {
  const state = useStore()
  const { data } = await useFetch<Writing[]>(
    `/api/writings/${page}`,
  )
  if (data.value)
    state.value.writings[page] = data.value
}
