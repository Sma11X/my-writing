export interface User {
  id?: string
  username: string
  password: string
}

export type UserWithoutPwd = Omit<User, 'password'>
