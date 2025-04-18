<template>
  <div>

    <button @click="removeCookie">
      Supprimer le cookie
    </button>

    <p v-if="message">{{ message }}</p>

  </div>
</template>

<script setup lang="ts">

const message = ref('')

const removeCookie = async ()=> {
  const res = await $fetch('/api/cookies/delete-username')
  message.value = res.message
}

</script>

