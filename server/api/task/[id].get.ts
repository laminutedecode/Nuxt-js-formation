import {prisma} from "@/server/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id)
  return await prisma.task.findUnique({
    where: { id }
  })
})