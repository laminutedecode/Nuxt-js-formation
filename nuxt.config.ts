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
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiUrl: process.env.API_URL as string,
      appName: process.env.APP_NAME as string,
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',  // 'out-in' pour une transition fluide entre les pages. Ensuite dans css
    },
  },
  // $production: {

  // },
  // $development: {

  // },
  // $env: {
  //   staging: {

  //   }
  // }




  // app: {
  //   head: {
  //     title: "MDC",
  //     link: [     
  //       {
  //          rel:"stylesheet",
  //         href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  //       }
  //     ]
  //   }
  // }

 
 
 
  
})
