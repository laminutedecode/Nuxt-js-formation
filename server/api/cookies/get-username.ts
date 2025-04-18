export default defineEventHandler((event)=> {
  const username = getCookie(event, 'username')


  return {
    username: username || null,
    message: username ? `le cookie à pour valeur ${username}` : "aucun cookie trouvé"
  }
})