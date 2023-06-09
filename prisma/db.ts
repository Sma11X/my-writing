import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | undefined
}

export const prisma
  = globalThis.prisma
  || new PrismaClient({
    log: ['error'],
  })

if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = prisma
