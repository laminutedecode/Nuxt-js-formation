import superjson from "superjson"

export default defineEventHandler(()=> {
  const data = {
    createdAt: new Date(),

    toJSON() {
      return this
    }
  }

  return superjson.stringify(data) as unknown as typeof data
})