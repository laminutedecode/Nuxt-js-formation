<template>
  <div>
    <h1>Page Contact</h1>

  </div>
</template>

<script setup>

import {useHead} from "#app"
import {useSeoMeta} from "#app"

useHead({
  title: 'Contact',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ]
})

definePageMeta({
  layout: "mylayout"
})

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