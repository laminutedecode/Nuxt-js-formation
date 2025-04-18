<template>
  <div class="p-4 max-w-md mx-auto">

    <input v-model="username" class="w-full block px-3 py-2 rounded-md border border-gray-300" type="text">
    <button @click="saveUsername">Enregistrer le cookie</button>

    <p v-if="message"> {{ message }}</p>

  </div>
</template>

<script setup lang="ts">

const username = ref('')
const message = ref('')

const saveUsername = async () => {
  if (!username.value) {
    message.value = 'Veuillez entrer un nom.'
    return
  }

  const res = await $fetch('/api/cookies/set-username', {
    method: 'POST',
    body: { username: username.value }
  })

  message.value = res.message
}
  
</script>

