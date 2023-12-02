<template>
  <input type="checkbox" :checked="todo.completed" @click="$emit('updateTodoStatus', index)" />
  <span :class="{ done: todo.completed }">{{ todo.title }}</span>
  <button @click="$emit('removeTodo', index)">Remove</button>
</template>

<script lang="ts">
import type { TodoComment } from 'typescript'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  emits: ['removeTodo', 'updateTodoStatus'],
  setup() {}
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
