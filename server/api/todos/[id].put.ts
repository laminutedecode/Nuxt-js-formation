import {prisma} from "@/lib/prisma"


export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id)
  const body = await readBody(event)

  return await prisma.todo.update({
    where: { id },
    data: {
      title: body.title,
      completed: body.completed
    }
  })
})