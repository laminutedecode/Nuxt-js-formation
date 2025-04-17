import {prisma} from "@/lib/prisma"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return await prisma.todo.create({
    data: {
      title: body.title
    }
  })
})