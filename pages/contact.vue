<template>
  <div>
    <h1>Page Contact</h1>

    <h2>{{ appName }}</h2>

    <p>{{ apiUrl }}</p>

  

  </div>
</template>

<script setup>

import {useHead} from "#app"
import {useSeoMeta} from "#app"

const config = useRuntimeConfig()

const apiUrl = config.public.apiUrl 
const appName = config.public.appName



useHead({
  title: 'Contact',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ]
})

// definePageMeta({
//   layout: "mylayout"
// })

useSeoMeta({
  title: "contact", 
  ogTitle: "contact",
  description: "contact page",
  ogDescription: "contact page",
  ogImage: "/image.png",
  twitterCard: "summary_large_image"
})
  
</script>

<style lang="scss" scoped>

</style>