<template>
  <input type="checkbox" :checked="todo.completed" @click="$emit('updateTodoStatus', index)" />
  <span
    v-if="!todo.editable"
    :class="{ done: todo.completed }"
    @click="$emit('startEditing', index)"
    >{{ todo.title }}</span
  >
  <input
    v-else
    type="text"
    :value="todo.title"
    @blur="$emit('stopEditing', index)"
    @keyup.enter="$emit('stopEditing', index)"
  />
  <button @click="$emit('removeTodo', index)">Remove</button>
</template>

<script lang="ts">
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
  emits: ['removeTodo', 'updateTodoStatus', 'startEditing', 'stopEditing']
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
