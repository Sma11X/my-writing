import { useAuthFetch } from '../useAuthFetch'
import { useAuthUser } from './useAuthUser'
import type { UserWithoutPwd } from '~/types/IUser'

export function useAuth() {
  const authUser = useAuthUser()

  const setUser = (user: UserWithoutPwd | null) => {
    authUser.value = user
  }

  const login = async (
    username: string,
    password: string,
  ) => {
    const data = await $fetch<UserWithoutPwd>('/api/auth/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })

    await navigateTo('/')
    setUser(data)
    return authUser
  }

  const logout = async () => {
    const data = await useAuthFetch<{ user: null }>('/api/auth/logout', {
      method: 'POST',
    })

    setUser(data.user)
  }

  const me = async () => {
    if (!authUser.value) {
      const data = await useAuthFetch<UserWithoutPwd>('/api/auth/me', {
        method: 'GET',
      })

      setUser(data)
    }

    return authUser
  }

  return {
    login,
    logout,
    me,
  }
}
