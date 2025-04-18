import {prisma} from "@/server/lib/prisma"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return await prisma.task.create({
    data: {
      title: body.title
    }
  })
})