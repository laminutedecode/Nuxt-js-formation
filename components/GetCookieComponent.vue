<template>
  <div>

    <button @click="loadUsername">Lire le cookie</button>

    <p v-if="message">{{ message }}</p>
    <p v-if="username">{{ username }}</p>

  </div>
</template>

<script setup lang="ts">

const username = ref('')
const message = ref('')

const loadUsername = async ()=> {
  const res = await $fetch('/api/cookies/get-username')

  username.value = res.username
  message.value = res.message
}

</script>
