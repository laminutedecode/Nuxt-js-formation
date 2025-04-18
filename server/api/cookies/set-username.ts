export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.username) {
    return {
      message: 'Aucun nom fourni.'
    }
  }

  setCookie(event, 'username', body.username, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7
  })

  return {
    message: `Le cookie "username" a été défini avec succès.`,
    value: body.username
  }
})
