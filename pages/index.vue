<template>
  <div>
    <h1>Page Home</h1>


    <!-- <img src="/images/img-01.jpg" alt=""> -->


    <!-- <img src="~/assets/images/img-01.jpg" alt=""> -->

    <p class="text-7xl text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam?</p>

    <h2 class="animate__animated animate__bounce">Je suis un titre h2</h2>
    <h3>Je suis un titre h3</h3>
 

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/first.css'

// import ('~/assets/css/second.css	')
// a ne pas faire

// useHead({
//   link: [
//     {
//        rel:"stylesheet",
//           href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
//     }
//   ]
// })


definePageMeta({
  middlewares: 'log'
})






</script>

<style  scoped>

@import url('~/assets/css/second.css')

    /* h2  {
      color: orange
    } */


</style>