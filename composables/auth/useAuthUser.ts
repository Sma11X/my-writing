import type { UserWithoutPwd } from '~/types/IUser'

export function useAuthUser() {
  return useState<{ user: UserWithoutPwd } | null>('user', () => null)
}
