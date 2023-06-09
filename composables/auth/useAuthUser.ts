import type { UserWithoutPwd } from '~/types/IUser'

export function useAuthUser() {
  return useState<UserWithoutPwd | null>('user', () => null)
}
