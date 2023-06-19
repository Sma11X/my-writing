import { prisma } from '~/prisma/db'
import type { writing } from '~/types/IWriting'

export async function createWriting(writingData: writing) {
  return await prisma.writing.create({
    data: writingData,
  })
}

export async function getWritingsByPage(prismaQuery: any) {
  return await prisma.writing.findMany(prismaQuery)
}

export async function getWritingById(id: string) {
  return await prisma.writing.findUnique({
    where: {
      id,
    },
  })
}
