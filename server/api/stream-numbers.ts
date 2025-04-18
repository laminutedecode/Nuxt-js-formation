// export default defineEventHandler(() => {

//   const stream = new ReadableStream({
//     async start(controller) {
//       for (let i = 1; i <= 5; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 1000))
//         controller.enqueue(`Nombre : ${i}\n`) 
//       }
//       controller.close() 
//     }
//   })

//   return stream
// })
