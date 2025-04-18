<template>
  <div>

    <input v-model="username" type="text">

    <button @click="updateCookie">
      Mise à jour
    </button>

    <button @click="deleteCookie">
     Supprimer le cookie
    </button>

    <p v-if="username">valeur actuelle : {{ username }}</p>
    <p v-if="message">{{ message }}</p>

  </div>
</template>

<script setup lang="ts">

  const username = useCookie('username', {
    default: () => '',
    maxAge: 60 * 60 * 24 * 7
  })

  const message = ref('')

  const updateCookie = ()=> {
    if(!username.value){
      message.value = 'Veuillez entrez un nom'
      return
    }
    message.value = `Le cookie à été mise à jour : ${username.value}`
  }

  const deleteCookie = ()=> {
    username.value = ""
    message.value = "Le cookie à été supprimé côté client"
  }

</script>
