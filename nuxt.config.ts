import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // app: {
  //   head: {
  //     link: [     
  //       {
  //          rel:"stylesheet",
  //         href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  //       }
  //     ]
  //   }
  // }

 
 
 
  
})
