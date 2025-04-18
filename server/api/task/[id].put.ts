import {prisma} from "@/server/lib/prisma"

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id)
  const body = await readBody(event)

  return await prisma.task.update({
    where: { id },
    data: {
      title: body.title,
      completed: body.completed
    }
  })
})