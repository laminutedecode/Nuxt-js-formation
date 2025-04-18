<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Liste des tâches</h1>
      <NuxtLink to="/create" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        + Créer
      </NuxtLink>
    </div>


    <!-- <SetCookieComponent/>
    <GetCookieComponent/>
    <DeleteCookieComponent/> -->
    <UseCookieComponent/>

    <ul v-if="todos.length" class="space-y-4">
      <li v-for="todo in todos" :key="todo.id" class="flex items-center justify-between bg-white shadow rounded p-4">
        <NuxtLink :to="`/todo/${todo.id}`" class="flex-1 text-lg font-medium hover:underline">
          {{ todo.title }}
        </NuxtLink>
        <div class="flex gap-2">
          <NuxtLink :to="`/todo/${todo.id}/edit`" class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
            Modifier
          </NuxtLink>
          <button @click="deleteTodo(todo.id)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Supprimer
          </button>
        </div>
      </li>
    </ul>

    <p v-else class="text-gray-500">Aucune tâche pour le moment.</p>
  </div>
</template>

<script setup lang="ts">

  import type {Task} from "@/types/task"
  import SetCookieComponent from "@/components/SetCookieComponent.vue"
  import GetCookieComponent from "@/components/GetCookieComponent.vue"
  import DeleteCookieComponent from "@/components/DeleteCookieComponent.vue"
  import UseCookieComponent from "@/components/UseCookieComponent.vue"

  const todos = ref<Task[]>([])

  const fetchTodos = async ()=> {
    todos.value = await $fetch<Task[]>('/api/task')
  }

  const deleteTodo = async(id: number) => {
    await $fetch(`/api/task/${id}`,{ method: "DELETE"})
    fetchTodos()
  }

  onMounted(fetchTodos)

</script>
