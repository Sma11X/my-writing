import { hash } from '~/server/utils/password'
import type { User } from '~/types/IUser'
import { prisma } from '~/prisma/db'

export async function createUser(userData: User) {
  const finalUserData = {
    ...userData,
    password: await hash(userData.password),
  }
  return prisma.user.create({
    data: finalUserData,
  })
}

export function getUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  })
}

export function getUserById(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}
