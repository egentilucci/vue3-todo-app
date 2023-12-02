<template>
  <h1>Vue 3 Todo App</h1>
  <form @submit.prevent="addTodo">
    <input type="text" name="todo" :value="todo" @input="todo = $event.target.value" />
    <button>Add New Todo</button>
  </form>
  <todo-list :todoList="todoList" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  components: { TodoList },
  setup() {
    const todo = ref('')
    const todoList = ref([])

    const addTodo = () => {
      todoList.value.push({
        title: todo.value,
        completed: false
      })

      console.log(`${todo.value} added to todoList`)

      todo.value = ''
    }

    return {
      addTodo,
      todo,
      todoList
    }
  }
})
</script>
