import {prisma} from "@/server/lib/prisma"

export default defineEventHandler(async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  })
})