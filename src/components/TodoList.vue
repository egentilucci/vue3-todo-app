<template>
  <div v-show="uncompletedTodos">TO DO [{{ uncompletedTodos }}]</div>
  <span v-for="(todo, index) in todoList" :key="index">
    <div v-if="todo.completed === false">
      <TodoElement
        :todo="todo"
        :index="index"
        @updateTodoStatus="$emit('updateTodoStatus', index)"
        @removeTodo="$emit('removeTodo', index)"
        @startEditing="$emit('startEditing', index)"
        @stopEditing="$emit('stopEditing', index)"
      />
    </div>
  </span>

  <div v-show="completedTodos">DONE [{{ completedTodos }}]</div>
  <span v-for="(todo, index) in todoList" :key="index">
    <div v-if="todo.completed === true">
      <TodoElement
        :todo="todo"
        :index="index"
        @updateTodoStatus="$emit('updateTodoStatus', index)"
        @removeTodo="$emit('removeTodo', index)"
        @startEditing="$emit('startEditing', index)"
        @stopEditing="$emit('stopEditing', $event.target.value, index)"
      />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { type TodoType } from '../interfaces/interfaces'
import TodoElement from './TodoElement.vue'

export default defineComponent({
  props: {
    todoList: {
      type: Array<TodoType>
    }
  },
  components: { TodoElement },
  emits: ['removeTodo', 'updateTodoStatus', 'startEditing', 'stopEditing'],
  setup(props) {
    const completedTodos = computed(() => {
      return props?.todoList?.filter((e) => e.completed === true).length
    })

    const uncompletedTodos = computed(() => {
      return props?.todoList?.filter((e) => e.completed === false).length
    })

    return {
      completedTodos,
      uncompletedTodos
    }
  }
})
</script>
