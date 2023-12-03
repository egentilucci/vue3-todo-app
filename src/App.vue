<template>
  <h1>Vue 3 Todo App</h1>
  <form @submit.prevent="addTodo">
    <input
      type="text"
      name="todo"
      :value="todo.title"
      @input="todo.title = handleInputChange($event)"
    />
    <button>Add New Todo</button>
  </form>
  <todo-list
    :todoList="todoList"
    @removeTodo="removeTodo"
    @updateTodoStatus="updateTodoStatus"
    @startEditing="startEditing"
    @stopEditing="stopEditing"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { type TodoType, type TodosType } from './interfaces/interfaces'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  components: { TodoList },
  setup() {
    const todo = ref<TodoType>({
      title: '',
      completed: false,
      editable: false
    })

    const todoList = ref<TodosType>([])

    const addTodo = () => {
      todoList.value.push({
        title: todo.value.title,
        completed: false,
        editable: false
      })

      console.log(`${todo.value.title} added to todoList`)

      todo.value.title = ''
    }

    const removeTodo = (index: number) => {
      todoList?.value.splice(index, 1)
    }

    const updateTodoStatus = (index: number) => {
      todoList.value[index].completed = !todoList.value[index].completed
    }

    const startEditing = (index: number) => {
      todoList.value[index].editable = true
    }

    const stopEditing = (index: number) => {
      todoList.value[index].editable = false
      todoList.value[index].title = (event?.target as HTMLInputElement).value
    }

    const handleInputChange = (event: Event) => {
      return (event.target as HTMLInputElement).value
    }

    return {
      addTodo,
      todo,
      todoList,
      removeTodo,
      updateTodoStatus,
      startEditing,
      stopEditing,
      handleInputChange
    }
  }
})
</script>
