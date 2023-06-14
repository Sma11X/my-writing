import { prisma } from '~/prisma/db'
import type { writing } from '~/types/IWriting'

export async function createWriting(writingData: writing) {
  return await prisma.writing.create({
    data: writingData,
  })
}
