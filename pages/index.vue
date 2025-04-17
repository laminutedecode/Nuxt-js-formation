<template>
  <div>

    <button @click="startStream" >
      Démarrer le flux
    </button>


    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>



  </div>
</template>

<script setup lang="ts"  >


const messages = ref<string[]>([])

async function startStream() {
  const response = await $fetch<ReadableStream>('/api/stream-numbers', {
    method: 'POST',
    responseType: 'stream'
  })

  const reader = response.pipeThrough(new TextDecoderStream()).getReader()

  while (true) {
    const { value, done } = await reader.read()

    if (done) break


    messages.value.push(value.trim())
  }
}




</script>

<style  scoped>

@import url('~/assets/css/second.css');



</style>