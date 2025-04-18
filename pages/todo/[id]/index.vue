<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold">{{ todo?.title }}</h1>

    <p class="mb-4 text-gray-500">
      Status :
      <span :class="todo?.completed ? 'text-green-600' : 'text-red-500'">
        {{ todo?.completed ? "Complétée" : "En cours" }}
      </span>
    </p>

    <div class="flex gap-3">
      <NuxtLink :to="`/todo/${todo?.id}/edit`" class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
        Modifier
      </NuxtLink>
      <NuxtLink to="/" class="bg-gray-400 px-3 py-1 rounded hover:bg-gray-500 text-white" >
        Retour
      </NuxtLink >
    </div>

  </div>
</template>

<script setup lang="ts">

import type {Task} from "@/types/task"

const route = useRoute()
const id = Number(route.params.id)

const todo = ref<Task | null>(null)

onMounted(async()=> {
  todo.value = await $fetch<Task>(`/api/task/${id}`)
})

</script>

