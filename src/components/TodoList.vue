<template>
  <div v-show="uncompletedTodos">TO DO [{{ uncompletedTodos }}]</div>
  <span v-for="(todo, index) in todoList">
    <div v-if="todo.completed === false">
      <Todo
        :todo="todo"
        :index="index"
        @updateTodoStatus="updateTodoStatus"
        @removeTodo="removeTodo"
        @startEditing="startEditing"
        @stopEditing="stopEditing"
      />
    </div>
  </span>

  <div v-show="completedTodos">DONE [{{ completedTodos }}]</div>
  <span v-for="(todo, index) in todoList">
    <div v-if="todo.completed === true">
      <Todo
        :todo="todo"
        :index="index"
        @updateTodoStatus="updateTodoStatus"
        @removeTodo="removeTodo"
        @startEditing="startEditing"
        @stopEditing="stopEditing"
      />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Todo from './Todo.vue'

export default defineComponent({
  props: {
    todoList: {
      type: Array
    }
  },
  components: { Todo },
  setup(props) {
    const completedTodos = computed(() => {
      return props.todoList.filter((e) => e.completed === true).length
    })

    const uncompletedTodos = computed(() => {
      return props.todoList.filter((e) => e.completed === false).length
    })

    const removeTodo = (index: number) => {
      console.log(`${props.todoList[index].title} removed from todoList`)

      props.todoList.splice(index, 1)
    }

    const updateTodoStatus = (index: number) => {
      props.todoList[index].completed = !props.todoList[index].completed
    }

    const startEditing = (index: number) => {
      props.todoList[index].editable = true
    }

    const stopEditing = (index: number) => {
      props.todoList[index].editable = false
      props.todoList[index].title = event.target.value
    }

    return {
      completedTodos,
      uncompletedTodos,
      removeTodo,
      updateTodoStatus,
      startEditing,
      stopEditing
    }
  }
})
</script>
