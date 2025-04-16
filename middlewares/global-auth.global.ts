
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Navigation de ${from.fullPath} vers ${to.fullPath}`)
})