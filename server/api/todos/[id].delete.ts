import {prisma} from "@/lib/prisma"


export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id)

  return await prisma.todo.delete({
    where: { id }
  })
})