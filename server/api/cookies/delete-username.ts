export default defineEventHandler((event)=> {
  deleteCookie(event, 'username')

  return  {
    message: "Le cookie username a été supprimé"
  }
})