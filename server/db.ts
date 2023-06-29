import { PrismaClient } from "@prisma/client"
import { PrismaClient as PrismaClientEdge } from "@prisma/client/edge"

let _prisma: PrismaClientEdge | PrismaClient

if (process.env.NODE_ENV === "development") {
  _prisma = new PrismaClient({
    log: ["error", "warn"],
  })
} else if (process.env.PRISMA_GENERATE_DATAPROXY === "true") {
  _prisma = new PrismaClientEdge({
    log: ["error"],
  })
} else {
  _prisma = new PrismaClient({
    log: ["error"],
  })
}

export const prisma = _prisma
